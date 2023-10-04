const obj = [
  {
    cat: "Charts",
    song: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4NWMkMAghMQ-hSzL8A1lmtGJqTpAE9CShpLYECDF4snFiVemT9GeCKU3iAncM2-AaCnE&usqp=CAU",
        cate: "Bollywood Butter",
      },
      {
        img: "https://img.buzzfeed.com/buzzfeed-static/static/2020-05/30/16/enhanced/88cd8a7468f6/enhanced-1630-1590855880-1.jpg?crop=280:200;20,33&output-format=jpg&output-quality=auto",
        cate: "Bollywood Romantic",
      },
      {
        img: "https://cdn0.weddingwire.in/article/2462/3_2/960/jpg/112642-oragraphy.jpeg",
        cate: "Bollywood Tadaka",
      },
      {
        img: "https://drop.ndtv.com/albums/ENTERTAINMENT/yearender2015top10songs/gerua.jpg",
        cate: "Best of SRK",
      },
      {
        img: "https://www.bollywoodcouch.com/wp-content/uploads/2019/11/Humsafar.jpeg",
        cate: "Desi Romance",
      },
    ],
  },
  {
    cat: "Big Hits!",
    song: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4NWMkMAghMQ-hSzL8A1lmtGJqTpAE9CShpLYECDF4snFiVemT9GeCKU3iAncM2-AaCnE&usqp=CAU",
        cate: "Bollywood Butter",
      },
      {
        img: "https://img.buzzfeed.com/buzzfeed-static/static/2020-05/30/16/enhanced/88cd8a7468f6/enhanced-1630-1590855880-1.jpg?crop=280:200;20,33&output-format=jpg&output-quality=auto",
        cate: "Bollywood Romantic",
      },
      {
        img: "https://cdn0.weddingwire.in/article/2462/3_2/960/jpg/112642-oragraphy.jpeg",
        cate: "Bollywood Tadaka",
      },
      {
        img: "https://drop.ndtv.com/albums/ENTERTAINMENT/yearender2015top10songs/gerua.jpg",
        cate: "Best of SRK",
      },
      {
        img: "https://www.bollywoodcouch.com/wp-content/uploads/2019/11/Humsafar.jpeg",
        cate: "Desi Romance",
      },
    ],
  },
  {
    cat: "Big Hits!",
    song: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4NWMkMAghMQ-hSzL8A1lmtGJqTpAE9CShpLYECDF4snFiVemT9GeCKU3iAncM2-AaCnE&usqp=CAU",
        cate: "Bollywood Butter",
      },
      {
        img: "https://img.buzzfeed.com/buzzfeed-static/static/2020-05/30/16/enhanced/88cd8a7468f6/enhanced-1630-1590855880-1.jpg?crop=280:200;20,33&output-format=jpg&output-quality=auto",
        cate: "Bollywood Romantic",
      },
      {
        img: "https://cdn0.weddingwire.in/article/2462/3_2/960/jpg/112642-oragraphy.jpeg",
        cate: "Bollywood Tadaka",
      },
      {
        img: "https://drop.ndtv.com/albums/ENTERTAINMENT/yearender2015top10songs/gerua.jpg",
        cate: "Best of SRK",
      },
      {
        img: "https://www.bollywoodcouch.com/wp-content/uploads/2019/11/Humsafar.jpeg",
        cate: "Desi Romance",
      },
    ],
  },
  {
    cat: "Big Hits!",
    song: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4NWMkMAghMQ-hSzL8A1lmtGJqTpAE9CShpLYECDF4snFiVemT9GeCKU3iAncM2-AaCnE&usqp=CAU",
        cate: "Bollywood Butter",
      },
      {
        img: "https://img.buzzfeed.com/buzzfeed-static/static/2020-05/30/16/enhanced/88cd8a7468f6/enhanced-1630-1590855880-1.jpg?crop=280:200;20,33&output-format=jpg&output-quality=auto",
        cate: "Bollywood Romantic",
      },
      {
        img: "https://cdn0.weddingwire.in/article/2462/3_2/960/jpg/112642-oragraphy.jpeg",
        cate: "Bollywood Tadaka",
      },
      {
        img: "https://drop.ndtv.com/albums/ENTERTAINMENT/yearender2015top10songs/gerua.jpg",
        cate: "Best of SRK",
      },
      {
        img: "https://www.bollywoodcouch.com/wp-content/uploads/2019/11/Humsafar.jpeg",
        cate: "Desi Romance",
      },
    ],
  },
];

const songData = obj
  .map((x) => {
    const { cat, song } = x;
    return `
  <h2 style="padding-top: 2rem; opacity: 0.9">${cat}</h2>
  <div class="song-cont-obj">
  ${song
    .map((y) => {
      const { cate, img } = y;
      return `
    <div class="song-box">
      <div class="song-img">
        <img src="${img}" alt="" />
        <div class="play">
          <i class="bx bx-play" style="color: #ffffff"></i>
        </div>
      </div>
      <h4>${cate}</h4>
      <p>Bole to biggest blockbuster</p>
    </div>
    `;
    })
    .join(" ")}
    
  </div>
    `;
  })
  .join("");
document.querySelector(".song-cetag").innerHTML = songData;
