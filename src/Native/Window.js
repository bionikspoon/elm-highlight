var _bionikspoon$elm_highlight$Native_Window = function () {

  function getSelection() {
    // return _elm_lang$core$Native_Scheduler.nativeBinding(function (callback) {
    //   callback(_elm_lang$core$Native_Scheduler.succeed(
    //     window.getSelection()
    //   ));
    // });
    var selection = window.getSelection()
    if (selection.anchorNode !== selection.focusNode) {
      selection.selectAllChildren(selection.focusNode.parentElement)
    }

    return selection.toString()
  }

  return {
    selection: getSelection
  };

}();
