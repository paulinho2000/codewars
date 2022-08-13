function sumDigNthTerm(initval, patternl, nthterm) {
  var sum = initval;
  for (var i = 0; i < nthterm-1; i++) {
    sum += patternl[i%patternl.length]   
  }
  return (sum.toString().split("")).reduce((a,b) => Number(a)+Number(b))
}
