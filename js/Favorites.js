export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = [
      {
      login: 'richardmezzomo',
      name: "Richard B Mezzomo",
      public_repos: '123',
      followers: '123'
      },

      {
        login: 'diego3g',
        name: "Diego Fernandes",
        public_repos: '123',
        followers: '123'
      },
    ]
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
  }

  update() {
   this.removeAllTr()

    this.entries.forEach(user => {
      const row = this.createRow()
      
      row.querySelector('.user img').src = 
      `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Image of ${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      this.tbody.append(row)
    } )


  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
      <td class="user">
        <img src="https://github.com/richardmezzomo.png" alt="">
        <a href="https://github.com/richardmezzomo" target="_blank">
          <p>richardmezzomo</p>
          <span>/richardmezzomo</span>
        </a>
      </td>
      <td class="repositories">123</td>
      <td class="followers">123</td>
      <td>
        <button>Delete</button>
      </td>
   `

   return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove()
    });
  }
}