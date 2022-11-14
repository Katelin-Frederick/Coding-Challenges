const addBorder = (picture: string[]): string[] => {
  // Get the overall length of the wall
  let wallLength = picture[0].length

  picture.forEach((item) => wallLength = item.length > wallLength ? item.length : wallLength)

  wallLength = wallLength + 2

  // Map through picture and add asterisks to each string
  const finalArr = picture.map((item) => {
    let finalStr = '*'.concat(item)

    while (finalStr.length < wallLength) {
      finalStr = finalStr.concat('*')
    }

    return finalStr
  })

  // Add first and last element (all asterisks element)
  finalArr.unshift('*'.repeat(wallLength))
  finalArr.push('*'.repeat(wallLength))

  return finalArr
}

export default addBorder