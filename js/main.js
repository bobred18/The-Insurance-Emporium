import './style.css';

/* URL to reach with endpoints */
const URL = 'https://www.theinsuranceemporium.co.uk/blog/';

/* Owner's account repeats a lot so it can be a single constant */
const OWNER_ACCOUNT = {
  name: 'The Insurance Emporium',
  url: 'https://www.theinsuranceemporium.co.uk/blog',
};

/* Supplied by database */
const blogsData = [
  {
    title: '[CLOSED]WIN £350 TOWARDS YOUR DREAM HOLIDAY!',
    path: 'win-holiday-of-your-dreams',
    createdAt: 'May 20, 2022 at 9:30 am',
    author: OWNER_ACCOUNT,
    text: 'To help The Insurance Emporium bid bon voyage to Mr Benn as he departs on his next exciting adventure, we’re giving one lucky person the chance to win a Last Minute holiday gift card towards their own holiday adventure! Whether your perfect idea of a holiday is soaking up the rays on a golden beach, […]',
    img: 'https://theinsuranceemporium.co.uk/blog/wp-content/uploads/2022/05/20092631/Instagram-MB-Bon-Voyage-Comp-Launch-16th-May-175x175.jpg'
  },
  {
    title: 'BON VOYAGE MR BENN',
    createdAt: 'May 19, 2022 at 8:40 am',
    path: 'bon-voyage-mr-benn',
    author: OWNER_ACCOUNT,
    text: 'After an unforgettable five years full of amazing memories and friendship, we’re saying a fond farewell to Mr Benn, as he begins an exciting new adventure further afield, now travel has reopened. Don’t worry, we’ll continue to look after him on his new voyage, as he’ll be protected with our insurance. As we wave goodbye […]',
    img: 'https://theinsuranceemporium.co.uk/blog/wp-content/uploads/2022/05/18134602/278139087_4937746813008939_8637322995470031521_n-260x173.png'
  },
  {
    title: 'ATOPIC DERMATITIS IN DOGS AND CATS',
    path: 'atopic-dermatitis-in-dogs-and-cats',
    createdAt: 'May 12, 2022 at 10:26 am',
    tags: ['cat', 'dog', 'pet', 'pet health'],
    author: OWNER_ACCOUNT,
    text: 'WHAT IS ATOPIC DERMATITIS? Atopic dermatitis is an allergic skin disease that can affect both cats and dogs. Certain breeds are more likely to get atopic dermatitis than others, such as Golden Retrievers, Bulldogs and most , but it can occur in all dogs and cats. Your pet may have an allergic reaction to something […]',
    img: 'https://theinsuranceemporium.co.uk/blog/wp-content/uploads/2022/05/12092650/cat-scratch-260x173.png'
  },
];

const blogsList = blogsData.map(b => `
  <div class="blog-post">
    <div class="up">
      <h2 class="title">
        <a href="${URL}${b.path}">
          ${b.title}
        </a>
      </h2>
      <div class="sub" alt="" >
        Posted on ${b.createdAt} by <a href="${b.author.url}">${b.author.name}</a>
      </div>
    </div>
    <div class="down">
      <a class="img-holder" href="${URL}${b.path}">
        <img src="${b.img}" alt="" />
      </a>
      <p class="text" alt="" >${b.text}</p>
      ${b.tags
    ? `<div class="tags">Tags: ${b.tags?.map(tag => `
    <a href="${URL}tag/${
      /* Converts tag names with space to tag names with hyphens */
      tag.split(' ').join('-')
      }">${tag}</a>`).join(', ') || ''}
    </div>`
    : ''
  }
    </div>
  </div>
  `).join('<br />');

/* render the blogsList as a joined string - so without annoying commas */
document.querySelector('#app').innerHTML = `
  ${blogsList}
`;
