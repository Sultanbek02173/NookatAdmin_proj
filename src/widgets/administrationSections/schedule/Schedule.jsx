import '../slide.scss';

export function Schedule() {
  const grafElement = [
    { heading: 'Эргешов Асилбек Камилович', microText: 'Мэр Ноукатского района', time: '12:00 - 13:00 приём' },
    { heading: 'Эргешов Асилбек Камилович', microText: 'Мэр Ноукатского района', time: '13:00 - 14:00 приём' },
    { heading: 'Эргешов Асилбек Камилович', microText: 'Мэр Ноукатского района', time: '14:00 - 15:00 приём' },
    { heading: 'Эргешов Асилбек Камилович', microText: 'Мэр Ноукатского района', time: '15:00 - 16:00 приём' },
  ];
  return (
    <section>
      <div className="container">
        <div className="graf-container">
          <div className="graf-text">
            <h1>График приема граждан</h1>
          </div>
          {grafElement.map((item, index) => (
            <div className="gridCards" key={index}>
              <div className="card-left">
                <h2>{item.heading}</h2>
                <p><i>{item.microText}</i></p>
              </div>
              <div className="time">
                <h1>{item.time}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
