var time = document.createElement("h1");
document.body.append(time);
var num = 10;

setTimeout(() => {
  time.innerHTML = num;
  setTimeout(() => {
    time.innerHTML = --num;
    setTimeout(() => {
      time.innerHTML = --num;
      setTimeout(() => {
        time.innerHTML = --num;
        setTimeout(() => {
          time.innerHTML = --num;
          setTimeout(() => {
            time.innerHTML = --num;
            setTimeout(() => {
              time.innerHTML = --num;
              setTimeout(() => {
                time.innerHTML = --num;
                setTimeout(() => {
                  time.innerHTML = --num;
                  setTimeout(() => {
                    time.innerHTML = --num;
                    setTimeout(() => {
                      time.innerHTML = "Happy indipendence day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
