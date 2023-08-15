
const mountains = [
    {
      name: 'Kilimanjaro',
      height: 5895,
      place: 'Tanzania'
    },
    {
      name: 'Everest',
      height: 8848,
      place: 'Himalayas'
    },
    {
      name: 'K2',
      height: 8616,
      place: 'Pakistan'
    }
  ]

  
  const table = document.createElement('table');
  table.innerHTML = '<tr><th>Name</th><th>Height</th><th>Place</th><tr>'

  for(formations of mountains) {
    const row2 = document.createElement('tr');
    const cellOne = document.createElement('td');
    const cellTwo = document.createElement('td');
    const cellThree = document.createElement('td');
    
    cellOne.innerText = formations.name;
    cellTwo.innerText = formations.height;
    cellThree.innerHTML = formations.place;
    
    row2.appendChild(cellOne)
    row2.appendChild(cellTwo)
    row2.appendChild(cellThree)
    
    table.appendChild(row2)
    // adding a few styles to the table
    row2.style.backgroundColor = 'tomato'
    row2.style.color = 'white'
    row2.style.textAlign = 'center'
    table.style.border = " 3px solid black"
    table.style.margin = 'auto'
    table.style.height = '300px'
    table.style.width = '300px'
    
  }
  
  const theMountain = document.getElementById('mountain')
  theMountain.appendChild(table)
  