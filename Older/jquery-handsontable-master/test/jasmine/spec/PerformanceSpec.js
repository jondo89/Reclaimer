describe('Performance', function () {
  var id = 'testContainer';

  //this is a test suite to test if there are no redundant operations

  beforeEach(function () {
    this.$container = $('<div id="' + id + '"></div>').appendTo('body');
  });

  afterEach(function () {
    if (this.$container) {
      destroy();
      this.$container.remove();
    }
  });

  it('should call renderer once for one cell (fixed column width)', function () {
    var count = 0;
    handsontable({
      data: createSpreadsheetData(1, 1),
      colWidths: 100,
      renderer: function () {
        Handsontable.renderers.TextRenderer.apply(this, arguments);
        count++;
      }
    });

    expect(count).toEqual(1);
  });

  it('should call renderer twice for one cell (auto column width)', function () {
    var count = 0;
    handsontable({
      data: createSpreadsheetData(1, 1),
      renderer: function () {
        Handsontable.renderers.TextRenderer.apply(this, arguments);
        count++;
      }
    });

    expect(count).toEqual(2); //1 for autoColumnSize, 1 for actual cell render
  });

  it('should call getCellMeta minimum number of times for one cell (auto column width)', function () {
    var count = 0;

    handsontable({
      data: createSpreadsheetData(1, 1),
      beforeGetCellMeta: function(){
        count++;

      }
    });

    expect(count).toEqual(4); //2 for autoColumnSize, 1 for getColWidth and 1 for actual cell render
  });

  it('should call renderer twice for each cell (auto column width)', function () {
    var count = 0;
    handsontable({
      data: createSpreadsheetData(4, 4),
      renderer: function () {
        Handsontable.renderers.TextRenderer.apply(this, arguments);
        count++;
      }
    });

    expect(count).toEqual(32); //16 in main table and 16 in autocellsize
  });

  it('should call getCellMeta twice for each cell (auto column width)', function () {
    var count = 0;

    handsontable({
      data: createSpreadsheetData(4, 4),
      beforeGetCellMeta: function(){
        count++;
      }
    });

    expect(count).toEqual(40); //16 in main table and 16 in autocellsize and 8 in getColWidth
  });
});