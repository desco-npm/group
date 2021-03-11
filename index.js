module.exports = {
  union () {
    return union(Object.values(arguments))
  },
  intersection () {
    return intersection(Object.values(arguments))
  },
  difference () {
    return difference(Object.values(arguments))
  }
}

function union (groups) {
  let group = []

  groups.map(g => {
    group = group.concat(g)
  })

  return group
}

function intersection (groups) {
  const intersection = []
  const groupA = groups.shift()

  groups.map(group => {
    group.map(i => {
      let found = true

      if (groupA.indexOf(i) === -1) {
        found = false
      }

      if (found) {
        intersection.push(i)
      }
    })
  })

  return intersection
}

function difference (groups) {
  const intersectionGroup = intersection(groups)

  return union(groups).filter(i => intersectionGroup.indexOf(i) === -1)
}