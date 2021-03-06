import { useSelector } from "react-redux";

function Pics({ Scrolled, start, base }) {
  const { flickr } = useSelector((store) => store.flickrReducer);
  const preview_num = 10;
  let position = 0;
  if (start) {
    position = Scrolled - start - base;
  }

  return (
    <section id="pics" className="myScroll">
      {/* <p style={position >= 0 ? { left: 100 + position } : null}>FLICKR</p> */}
      {/* <h3 style={position >= 0 ? { left: 100 + position * 2 } : null}>FLICKR</h3> */}
      <p style={{ left: 100 + position }}>FLICKR</p>
      <h3 style={{ left: 100 + position * 2 }}>FLICKR</h3>
      {flickr.map((item, idx) => {
        if (idx < preview_num) {
          return (
            <div className="pic" key={item.id}>
              <img
                src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
                alt={item.title}
              />
            </div>
          );
        }
      })}
    </section>
  );
}

export default Pics;
