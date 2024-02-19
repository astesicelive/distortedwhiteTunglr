function may__lbDivide() {
  $('.gridMusic p, .gridBasic p').each(function() {
    let $this = $(this);
    let idText = $this.find('b').text().length;
    let defineID = 'ß' + $this.find('b').text().substr(0,idText - 1);
    $this.attr('id',defineID);
  })
  
  $('.item.1 .gridMusic, .item.2 .gridMusic, .item.3 .gridMusic, .item.4 .gridMusic, .item.3 .gridBasic, .item.4 .gridBasic').each(function() {
    divide($(this),[/13/,/15/,/17/,/19/,/14/,/17/]);
  });
  $('.item.5 .gridMusic').each(function() {
    divide($(this),[/17/,/19/,/21/,/23/,/18/,/21/]);
  });
  $('.item.5 .gridBasic').each(function() {
    divide($(this),[/17/,/19/,/20/,/23/,/18/,/21/]);
  });
}

function divide(item,checks) {
  let $this = item;
  let splits = [];
  let idOne, idTwo, idThree, idFour;
  let ids = [idOne, idTwo, idThree, idFour];
  let check = checks;
  let pLen = $this.find('p');
  for (let idNum = 0; idNum < ids.length; idNum++) {
    for (let f = 0; f < pLen.length+1; f++) {
      let fir = f + 1;
      let finding = $this.find('p:nth-child('+fir+')');
      if (finding.text().match(check[idNum])) {
        ids[idNum] = finding.attr('id');
        break;
      }
      if (!ids[idNum] && idNum == 0) {
        if (finding.text().match(check[4])) {
          ids[idNum] = finding.attr('id');
          break;
        }
      }
      if (!ids[idNum] && idNum == 2) {
        if (finding.text().match(check[5])) {
          ids[idNum] = finding.attr('id');
          break;
        }
      }
    }
  }

  for (let idNumCheck = 0; idNumCheck < ids.length; idNumCheck++) {
    if (ids[idNumCheck]) {
      splits.push($this.find('#'+ids[idNumCheck]))
    }
  }

  for (let i = 0; i < splits.length; i++) {
    let lbNum = i + 1;
    splits[i].before('<lb>' + lbNum + '</lb>');
  }
}
