(function (Handsontable, CopyPaste, SheetClip) {

  function CopyPastePlugin(instance) {
    this.copyPasteInstance = CopyPaste.getInstance();

    this.copyPasteInstance.onCut(onCut);
    this.copyPasteInstance.onPaste(onPaste);
    var plugin = this;

    instance.addHook('beforeKeyDown', onBeforeKeyDown);

    function onCut() {
      if (!instance.isListening()) {
        return;
      }

      instance.selection.empty();
    }

    function onPaste(str) {
      if (!instance.isListening() || !instance.selection.isSelected()) {
        return;
      }

      var input = str.replace(/^[\r\n]*/g, '').replace(/[\r\n]*$/g, '') //remove newline from the start and the end of the input
        , inputArray = SheetClip.parse(input)
        , selected = instance.getSelected()
        , coordsFrom = new WalkontableCellCoords(selected[0], selected[1])
        , coordsTo = new WalkontableCellCoords(selected[2], selected[3])
        , cellRange = new WalkontableCellRange(coordsFrom, coordsFrom, coordsTo)
        , topLeftCorner = cellRange.getTopLeftCorner()
        , bottomRightCorner = cellRange.getBottomRightCorner()
        , areaStart = topLeftCorner
        , areaEnd = new WalkontableCellCoords(
          Math.max(bottomRightCorner.row, inputArray.length - 1 + topLeftCorner.row),
          Math.max(bottomRightCorner.col, inputArray[0].length - 1 + topLeftCorner.col)
        );

      instance.addHookOnce('afterChange', function (changes, source) {
        if (changes && changes.length) {
          this.selectCell(areaStart.row, areaStart.col, areaEnd.row, areaEnd.col);
        }
      });

      instance.populateFromArray(areaStart.row, areaStart.col, inputArray, areaEnd.row, areaEnd.col, 'paste', instance.getSettings().pasteMode);
    };

    function onBeforeKeyDown (event) {
      if (instance.getSelected()) {
        if (Handsontable.helper.isCtrlKey(event.keyCode)) {
          //when CTRL is pressed, prepare selectable text in textarea
          //http://stackoverflow.com/questions/3902635/how-does-one-capture-a-macs-command-key-via-javascript
          plugin.setCopyableText();
          event.stopImmediatePropagation();
          return;
        }

        var ctrlDown = (event.ctrlKey || event.metaKey) && !event.altKey; //catch CTRL but not right ALT (which in some systems triggers ALT+CTRL)

        if (event.keyCode == Handsontable.helper.keyCode.A && ctrlDown) {
          instance._registerTimeout(setTimeout(Handsontable.helper.proxy(plugin.setCopyableText, plugin), 0));
        }
      }
    }

    this.destroy = function () {
      this.copyPasteInstance.removeCallback(onCut);
      this.copyPasteInstance.removeCallback(onPaste);
      this.copyPasteInstance.destroy();
      instance.removeHook('beforeKeyDown', onBeforeKeyDown);
    };

    instance.addHook('afterDestroy', Handsontable.helper.proxy(this.destroy, this));

    this.triggerPaste = Handsontable.helper.proxy(this.copyPasteInstance.triggerPaste, this.copyPasteInstance);
    this.triggerCut = Handsontable.helper.proxy(this.copyPasteInstance.triggerCut, this.copyPasteInstance);

    /**
     * Prepares copyable text in the invisible textarea
     */
    this.setCopyableText = function () {

      var settings = instance.getSettings();
      var copyRowsLimit = settings.copyRowsLimit;
      var copyColsLimit = settings.copyColsLimit;

      var selRange = instance.getSelectedRange();
      var topLeft = selRange.getTopLeftCorner();
      var bottomRight = selRange.getBottomRightCorner();
      var startRow = topLeft.row;
      var startCol = topLeft.col;
      var endRow = bottomRight.row;
      var endCol = bottomRight.col;
      var finalEndRow = Math.min(endRow, startRow + copyRowsLimit - 1);
      var finalEndCol = Math.min(endCol, startCol + copyColsLimit - 1);

      instance.copyPaste.copyPasteInstance.copyable(instance.getCopyableData(startRow, startCol, finalEndRow, finalEndCol));

      if (endRow !== finalEndRow || endCol !== finalEndCol) {
        Handsontable.hooks.run(instance, "afterCopyLimit", endRow - startRow + 1, endCol - startCol + 1, copyRowsLimit, copyColsLimit);
      }
    };

  }



  function init() {
    var instance  = this;
    var pluginEnabled = instance.getSettings().copyPaste !== false;

    if(pluginEnabled && !instance.copyPaste){

      instance.copyPaste = new CopyPastePlugin(instance);

    } else if (!pluginEnabled && instance.copyPaste) {

      instance.copyPaste.destroy();
      delete instance.copyPaste;

    }

  }

  Handsontable.hooks.add('afterInit', init);
  Handsontable.hooks.add('afterUpdateSettings', init);

  Handsontable.hooks.register('afterCopyLimit');
})(Handsontable, CopyPaste, SheetClip);