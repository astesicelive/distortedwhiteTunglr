// attributes/colors/skills
function colorAttr(item,array) {
  let $this = item;
  let basicID = $this.attr('class').split(' ')[3];
  let arr = array;
  let $cur;
  for (let l = 0; l < arr.length; l++) {
    $cur = arr[l];
    if (basicID == $cur[0]) {
      break;
    }
  };
  if (basicID == $cur[0]) {
    $this.addClass($cur[1]);
  };
}
