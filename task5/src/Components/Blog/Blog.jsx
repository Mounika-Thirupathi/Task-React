import './Blog.css'
function Blog() {
  const data = [
    {
      image: "https://food-mart-template.vercel.app/images/post-thumb-1.jpg",
      para1: "Top 10 casual look ideas to dress up your kids",
      para2:
        "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi..",
    },
    {
      image: "https://food-mart-template.vercel.app/images/post-thumb-2.jpg",
      para1: "How to style your kids with confidence",
      para2:
        "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi..",
    },
    {
      image: "https://food-mart-template.vercel.app/images/post-thumb-3.jpg",
      para1: "Best fashion trends for kids this season",
      para2:
        "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi..",
    },
  ];

  return (
    <div className="containers2">
      {/* <div style={{display:"flex"}}>
        <strong>Our Recent Blog</strong>
        <p>Read All Articles</p>
      </div> */}

      {data.map((value, index) => (
        <div key={index} className='containers3'>
          <img src={value.image} height="300px" width="410px"/>
          <p style={{fontSize:"x-large"}}><strong>{value.para1}</strong></p>
          <p>{value.para2}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;

