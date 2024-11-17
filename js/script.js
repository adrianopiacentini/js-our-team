const teamMembers = [
    {
      name: "Marco Bianchi",
      role: "Designer",
      email: "marcobianchi@team.com",
      img: "img/male1.png"
    },
    {
      name: "Laura Rossi",
      role: "Front-end Developer",
      email: "laurarossi@team.com",
      img: "img/female1.png"
    },
    {
      name: "Giorgio Verdi",
      role: "Back-end Developer",
      email: "giorgioverdi@team.com",
      img: "img/male2.png"
    },
    {
      name: "Marta Ipsum",
      role: "SEO Specialist",
      email: "martarossi@team.com",
      img: "img/female2.png"
    },
    {
      name: "Roberto Lorem",
      role: "SEO Specialist",
      email: "robertolorem@team.com",
      img: "img/male3.png"
    },
    {
      name: "Daniela Amet",
      role: "Analyst",
      email: "danielaamet@team.com",
      img: "img/female3.png"
    },
  ];

  //DOC elements
const cardImg = document.getElementById('card-img')
const cardName = document.getElementById('card-name')
const cardRole = document.getElementById('card-role')
const cardEmail = document.getElementById('card-email')
const cardContainer = document.getElementById('row')
// console.log(cardImg, cardName, cardRole, cardEmail, cardContainer)

const newCard = ({name, role, email, img}) => {
  return `
      <div class="card mb-3" style="max-width: 500px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="./${img}" class="img-fluid rounded-start" id="card-img" alt="Team member">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title" id="card-name">${name}</h5>
            <p class="card-text" id="card-role">${role}</p>
            <p class="card-text" id="card-email">${email}</p>
          </div>
        </div>
      </div>
    </div>
  `
}

const showCards = () => {
  let cards = '';

  for (let i = 0; i < teamMembers.length; i++) {
    const currMember = teamMembers[i];
    
    const card = newCard(currMember);
    cards += card;
  }
  cardContainer.innerHTML = cards
};

showCards();