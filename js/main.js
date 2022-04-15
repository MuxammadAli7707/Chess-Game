const elChess = document.getElementById("chess-box");
const elNumX = document.getElementById("num-x");
const elNumY = document.getElementById("num-y");


let mass = [];
for(let i = 1; i <= 8; i++) {
  for(let j = 8; j >= 1; j--){
    let obj = {
      x: i,
      y: j,
    }
    mass.push(obj);
  }
}  
console.log(mass);

mass.forEach((element, i)=>{
    let box = document.createElement('div');
    box.className = `square x-${element.x} y-${element.y}`;
    box.id = i;
    elChess.appendChild(box);
})

let boxs = document.querySelectorAll(".square");
boxs.forEach((item)=> {
  mass.forEach((el, idx) => {
    if(item.id == idx) {
      if(el.x % 2 == 0  && el.y % 2 == 0){
        item.classList.add("blackk");
      }
      if(el.x % 2 != 0 && el.y % 2 != 0){
        item.classList.add("blackk");
      }
      else {
        item.classList.add("whites");
      }
    }
  })
  
  item.addEventListener("mouseover", ()=> {
    boxs.forEach((elem) => {
      elem.classList.remove("danger");
    });
    item.classList.add("danger");
    mass.forEach((element, i)=> {
      if(i == item.id) {
        elNumX.textContent = `${element.x}`;
        elNumY.textContent = `${element.y}`;
      }
    })
  })
  item.addEventListener("mouseout", ()=> {
    item.classList.remove("danger");
    elNumX.textContent = "0";
    elNumY.textContent = "0";
  });
});


let header = document.getElementById("list-btn");
let btns = header.querySelectorAll(".chess__btn");
for ( i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

let queen = document.getElementById("queen")
queen.addEventListener('click', () => {
    boxs.forEach((item) => {
        mass.forEach((elem, idx) => {
            item.addEventListener('mouseover', () => {
                if (item.id == idx) {
                    boxs.forEach((el, i) => {
                        el.classList.remove('greening')
                        if (el.className.includes(`y-${elem.y}`)) {
                            el.classList.add('greening')
                        }
                        if (el.className.includes(`x-${elem.x}`)) {
                            el.classList.add('greening')
                        }
                        for (let i = 0; i < 8; i++) {
                            if (el.className.includes(`y-${elem.y + i}`) && el.className.includes(`x-${elem.x + i}`)) {
                                el.classList.add('greening')
                            }
                            if (el.className.includes(`y-${elem.y - i}`) && el.className.includes(`x-${elem.x + i}`)) {
                                el.classList.add('greening')
                            }
                            if (el.className.includes(`y-${elem.y - i}`) && el.className.includes(`x-${elem.x - i}`)) {
                                el.classList.add('greening')
                            }
                            if (el.className.includes(`y-${elem.y + i}`) && el.className.includes(`x-${elem.x - i}`)) {
                                el.classList.add('greening')
                            }
                        }
                    })
                }
            })
            item.addEventListener("mouseout", () => {
                if (item.id == idx) {
                    boxs.forEach((el, i) => {
                        el.classList.remove('greening')
                    })
                }
            })
        })
    })
})

let castle = document.getElementById("castle");
castle.addEventListener("click",()=>{
  castle.classList.add("active");
    boxs.forEach((item) => {
        mass.forEach((el, idx) => {
            item.addEventListener('mouseover', () => {
                if (item.id == idx) {
                    boxs.forEach((elem, i) => {
                      elem.classList.remove('greening')
                        if (elem.className.includes(`y-${el.y}`)) {
                            elem.classList.add('greening')
                        }
                        if (elem.className.includes(`x-${el.x}`)) {
                            elem.classList.add('greening')
                        }
                    })

                }

            })
            item.addEventListener("mouseout", () => {
                if (item.id == idx) {
                    boxs.forEach((elem, i) => {
                        if (elem.className.includes(`y ${el.y}`)) {
                            elem.classList.remove('greening')
                        }
                        if (elem.className.includes(`x-${el.x}`)) {
                            elem.classList.remove('greening')
                        }
                    })

                }
            })
        })
    })
})

let king = document.getElementById("king");
king.addEventListener('click', () => {
  king.classList.add("active");
    boxs.forEach((item) => {
        mass.forEach((elem, idx) => {
            item.addEventListener('mouseover', () => {
                if (item.id == idx) {
                    boxs.forEach((el, i) => {
                        el.classList.remove('greening');
                        if (el.className.includes(`y-${elem.y + 1}`) && el.className.includes(`x-${elem.x - 1}`)) {
                            el.classList.add('greening')
                        } 
                        if (el.className.includes(`y-${elem.y - 1}`) && el.className.includes(`x-${elem.x - 1}`)) {
                            el.classList.add('greening')
                        }
                        if (el.className.includes(`y-${elem.y}`) && el.className.includes(`x-${elem.x - 1}`)) {
                            el.classList.add('greening')
                        }
                        if (el.className.includes(`y-${elem.y - 1}`) && el.className.includes(`x-${elem.x}`)) {
                            el.classList.add('greening')
                        }
                        if (el.className.includes(`y-${elem.y + 1}`) && el.className.includes(`x-${elem.x}`)) {
                            el.classList.add('greening')
                        }
                        if (el.className.includes(`y-${elem.y - 1}`) && el.className.includes(`x-${elem.x + 1}`)) {
                            el.classList.add('greening')
                        }
                        if (el.className.includes(`y-${elem.y}`) && el.className.includes(`x-${elem.x + 1}`)) {
                            el.classList.add('greening')

                        } if (el.className.includes(`y-${elem.y + 1}`) && el.className.includes(`x-${elem.x + 1}`)) {
                            el.classList.add('greening')
                        }
                    })

                }
            })
            item.addEventListener("mouseout", () => {
                if (item.id == idx) {
                    boxs.forEach((el, i) => {
                        el.classList.remove('greening')

                      })
                }
            })
        })
    })
})

let knight = document.getElementById("knight")
knight.addEventListener('click', () => {
  knight.classList.add("active");
    boxs.forEach((item) => {
        mass.forEach((elem, idx) => {
            item.addEventListener('mouseover', () => {
                if (item.id == idx) {
                    boxs.forEach((el, i) => {
                        el.classList.remove('greening')
                        if (el.className.includes(`y-${elem.y + 1}`) && el.className.includes(`x-${elem.x + 2}`)) {
                            el.classList.add('greening')
                        }
                        if (el.className.includes(`y-${elem.y + 2}`) && el.className.includes(`x-${elem.x + 1}`)) {
                            el.classList.add('greening')
                        }
                        if (el.className.includes(`y-${elem.y + 2}`) && el.className.includes(`x-${elem.x - 1}`)) {
                            el.classList.add('greening')
                        }
                        if (el.className.includes(`y-${elem.y + 1}`) && el.className.includes(`x-${elem.x - 2}`)) {
                            el.classList.add('greening')
                        }
                        if (el.className.includes(`y-${elem.y - 1}`) && el.className.includes(`x-${elem.x + 2}`)) {
                            el.classList.add('greening')
                        }
                        if (el.className.includes(`y-${elem.y - 2}`) && el.className.includes(`x-${elem.x + 1}`)) {
                            el.classList.add('greening')
                        }
                        if (el.className.includes(`y-${elem.y - 2}`) && el.className.includes(`x-${elem.x - 1}`)) {
                            el.classList.add('greening')
                        }
                        if (el.className.includes(`y-${elem.y - 1}`) && el.className.includes(`x-${elem.x - 2}`)) {
                            el.classList.add('greening')
                        }
                    })
                }
            })
            item.addEventListener("mouseout", () => {
                if (item.id == i) {
                    boxs.forEach((el, id) => {
                        el.classList.remove("greening")
                    })
                }
            })
        })
    })
})
let bishop = document.getElementById('bishop')
bishop.addEventListener('click', () => {
  bishop.classList.add("active");
    boxs.forEach((item) => {
        mass.forEach((elem, i) => {
            item.addEventListener('mouseover', () => {
                if (item.id == i) {
                    boxs.forEach((el, id) => {
                        el.classList.remove('greening')
                        for (let i = 0; i < 8; i++) {
                            if (el.className.includes(`y-${elem.y + i}`) && el.className.includes(`x-${elem.x + i}`)) {
                                el.classList.add('greening')
                            }
                            if (el.className.includes(`y-${elem.y - i}`) && el.className.includes(`x-${elem.x + i}`)) {
                                el.classList.add('greening')
                            }
                            if (el.className.includes(`y-${elem.y - i}`) && el.className.includes(`x-${elem.x - i}`)) {
                                el.classList.add('greening')
                            }
                            if (el.className.includes(`y-${elem.y + i}`) && el.className.includes(`x-${elem.x - i}`)) {
                                el.classList.add('greening')
                            }
                        }
                    })
                }
            })
            item.addEventListener("mouseout", () => {
                if (item.id == idx) {
                    boxs.forEach((el, i) => {
                        el.classList.remove('greening')
                    })
                }
            })
        })
    })
})

let pawn = document.getElementById("pawn");
pawn.addEventListener("click", ()=> {
  pawn.classList.add("active");
  boxs.forEach((item) => {
    mass.forEach((elem, idx) => {
        item.addEventListener('mouseover', () => {
            if (item.className.includes(`x-2`)) {
                if (item.id == idx) {
                    boxs.forEach((el) => {
                        el.classList.remove('greening')
                        if (el.className.includes(`y-${elem.y}`) && el.className.includes(`x-${elem.x - 1}`)) {
                            el.classList.add('greening')
                        }
                        if (el.className.includes(`y-${elem.y}`) && el.className.includes(`x-${elem.x - 2}`)) {
                            el.classList.add('greening')
                        }
                    })
                }
            } else if (item.id == idx) {
                boxs.forEach((el) => {
                    if (el.className.includes(`y-${elem.y}`) && el.className.includes(`x-${elem.x - 1}`)) {
                        el.classList.add('greening')
                    } else {
                        el.classList.remove('greening')
                    }
                })
            }
        })
        item.addEventListener("mouseout", () => {
            if (item.id == idx) {
                boxs.forEach((el, i) => {
                    el.classList.remove('greening')
                })
            }
        })
    })
  })
})

const elAnime = document.getElementById("anime");
let a = 1;
elAnime.addEventListener('click', () => {
  elChess.classList.toggle('animation');
  if (a == 1) {
    elAnime.textContent = '2D';
    a++;
  }
  else {
    elAnime.textContent = '3D';
    a--;
  }
});
