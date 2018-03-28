const {rmdirSync, unlinkSync, readdirSync, lstatSync} = require('fs')
const {join} = require('path')

function remove(loc) {
  const s = lstatSync(loc)

  if (s.isDirectory()) {
    readdirSync(loc).forEach(subloc => {
      remove(join(loc, subloc))
    })

    rmdirSync(loc)
  } else {
    unlinkSync(loc)
  }
}

remove('./38550_PLU_20100625')
