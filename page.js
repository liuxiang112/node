let current, totalList, tableList, pageSize
function setShowList () {
  let m = (current - 1) * pageSize - 1
  let n = m + pageSize
  tableList = totalList.slice(m, n+1)
}