// ticket

// Play with the inputs -->
let flights = [
  {
    currency: "EUR",
    price: 128.67,
    carrier: "KL",
    time: "2h 30min",
    nodes: ["CDG 2017-05-30T09:35+02:00 AMS 2017-05-30T11:15+02:00"]
  },
  {
    currency: "EUR",
    price: 138.7,
    carrier: "AF",
    time: "2h 30min",
    nodes: ["CDG 2017-05-30T12:35+02:00 AMS 2017-05-30T13:50+02:00"]
  },
  {
    currency: "EUR",
    price: 151.41,
    carrier: "BA",
    time: "2h 30min",
    nodes: ["CDG 2017-05-30T11:40+02:00 AMS 2017-05-30T12:55+02:00"]
  },
  {
    currency: "EUR",
    price: 174.7,
    carrier: "KL",
    time: "2h 30min",
    nodes: ["CDG 2017-05-30T18:35+02:00 AMS 2017-05-30T19:50+02:00"]
  },
  {
    currency: "EUR",
    price: 204.7,
    carrier: "AF",
    time: "2h 30min",
    nodes: ["CDG 2017-05-30T11:40+02:00 AMS 2017-05-30T12:55+02:00"]
  }
];

let carrier = {
  AF: "Air France",
  KL: "KLM Royal Dutch Airlines",
  BA: "British Airways"
};

let airports = [
  {
    name: "Vichy-Charmeil Airport",
    city: "Vichy",
    country: "France",
    IATA: "VHY"
  },
  { name: "Lyon-Bron Airport", city: "Lyon", country: "France", IATA: "LYN" },
  {
    name: "Cannes-Mandelieu Airport",
    city: "Cannes",
    country: "France",
    IATA: "CEQ"
  },
  {
    name: "Marseille Provence Airport",
    city: "Marseille",
    country: "France",
    IATA: "MRS"
  },
  {
    name: "Charles de Gaulle International",
    city: "Paris",
    country: "France",
    IATA: "CDG"
  },
  {
    name: "Toussus-le-Noble Airport",
    city: "Toussous-le-noble",
    country: "France",
    IATA: "TNF"
  },
  { name: "Paris-Orly Airport", city: "Paris", country: "France", IATA: "ORY" },
  {
    name: "Le Mans-Arnage Airport",
    city: "Le Mans",
    country: "France",
    IATA: "LME"
  },
  {
    name: "Nantes Atlantique Airport",
    city: "Nantes",
    country: "France",
    IATA: "NTE"
  },
  {
    name: "Nancy-Essey Airport",
    city: "Nancy",
    country: "France",
    IATA: "ENC"
  },
  {
    name: "Frankfurt am Main International",
    city: "Frankfurt",
    country: "Germany",
    IATA: "FRA"
  },
  { name: "Hamburg Airport", city: "Hamburg", country: "Germany", IATA: "HAM" },
  {
    name: "Cologne Bonn Airport",
    city: "Cologne",
    country: "Germany",
    IATA: "CGN"
  },
  {
    name: "Munich International Airport",
    city: "Munich",
    country: "Germany",
    IATA: "MUC"
  },
  {
    name: "Stuttgart Airport",
    city: "Stuttgart",
    country: "Germany",
    IATA: "STR"
  },
  {
    name: "Berlin-Tegel International Airport",
    city: "Berlin",
    country: "Germany",
    IATA: "TXL"
  },
  {
    name: "Hannover Airport",
    city: "Hannover",
    country: "Germany",
    IATA: "HAJ"
  },
  { name: "Bremen Airport", city: "Bremen", country: "Germany", IATA: "BRE" },
  {
    name: "Frankfurt-Hahn Airport",
    city: "Hahn",
    country: "Germany",
    IATA: "HHN"
  },
  {
    name: "Dortmund Airport",
    city: "Dortmund",
    country: "Germany",
    IATA: "DTM"
  },
  { name: "Cork Airport", city: "Cork", country: "Ireland", IATA: "ORK" },
  { name: "Galway Airport", city: "Galway", country: "Ireland", IATA: "GWY" },
  { name: "Dublin Airport", city: "Dublin", country: "Ireland", IATA: "DUB" },
  {
    name: "Waterford Airport",
    city: "Waterford",
    country: "Ireland",
    IATA: "WAT"
  },
  {
    name: "Amsterdam Airport Schiphol",
    city: "Amsterdam",
    country: "Netherlands",
    IATA: "AMS"
  },
  {
    name: "Maastricht Aachen Airport",
    city: "Maastricht",
    country: "Netherlands",
    IATA: "MST"
  },
  {
    name: "Eindhoven Airport",
    city: "Eindhoven",
    country: "Netherlands",
    IATA: "EIN"
  },
  {
    name: "Rotterdam The Hague Airport",
    city: "Rotterdam",
    country: "Netherlands",
    IATA: "RTM"
  },
  {
    name: "Belfast International Airport",
    city: "Belfast",
    country: "United Kingdom",
    IATA: "BFS"
  },
  {
    name: "Manchester Airport",
    city: "Manchester",
    country: "United Kingdom",
    IATA: "MAN"
  },
  {
    name: "Southampton Airport",
    city: "Southampton",
    country: "United Kingdom",
    IATA: "SOU"
  },
  {
    name: "London Heathrow Airport",
    city: "London",
    country: "United Kingdom",
    IATA: "LHR"
  },
  {
    name: "Blackpool International Airport",
    city: "Blackpool",
    country: "United Kingdom",
    IATA: "BLK"
  },
  {
    name: "Newcastle Airport",
    city: "Newcastle",
    country: "United Kingdom",
    IATA: "NCL"
  },
  {
    name: "London Stansted Airport",
    city: "London",
    country: "United Kingdom",
    IATA: "STN"
  },
  {
    name: "Miami International Airport",
    city: "Miami",
    country: "United States",
    IATA: "MIA"
  },
  {
    name: "John F Kennedy International Airport",
    city: "New York",
    country: "United States",
    IATA: "JFK"
  },
  {
    name: "Piedmont Triad International Airport",
    city: "Greensboro",
    country: "United States",
    IATA: "GSO"
  },
  {
    name: "Wings Field",
    city: "Philadelphia",
    country: "United States",
    IATA: "BBX"
  },
  {
    name: "Hardwick Field",
    city: "Cleveland",
    country: "United States",
    IATA: "HDI"
  },
  {
    name: "Warren Field",
    city: "Washington",
    country: "United States",
    IATA: "OCW"
  }
];

(function() {
  let _airports = _.groupBy(airports, o => o.country),
    selectIndex = [],
    selectData = [];

  _.each(_airports, (countryList, countryName) => {
    let firstLeter = countryName.split("")[0];
    selectData.push(
      `<li class="sep" data-index="${firstLeter}">${countryName}</li>`
    );
    selectIndex.push(`<li>${firstLeter}</li>`);

    _.each(countryList, (airport, i) => {
      selectData.push(`<li data-iata="${airport.IATA}" data-city="${
        airport.city
        }">
				${airport.IATA}, ${airport.name}</li>`);
    });
  });

  $(".select ul.select-index").html(_.uniq(selectIndex).join(""));
  $(".select ul.select-data").html(selectData.join(""));

  // Calendar days
  let days = [30];
  for (let i = 0; i < 31; i++) {
    days.push(i);
  }

  let daysRender = _.map(days, function(i) {
    return `<span>${i + 1}</span>`;
  });

  $(".calendar .days").html(daysRender.join(""));
  $(".calendar .days span")
    .eq(8)
    .addClass("checked");

  // Flight Results
  doFlightsRender(true);

  // Events
  // Open inputs
  $(".control:not(.open) .control-head").on("click", function(evt) {
    $(evt.currentTarget)
      .parent(".control")
      .addClass("open");
  });

  $(".control .close").on("click", function(evt) {
    let z = $(evt.currentTarget).closest(".control");
    setTimeout(() => {
      z.removeClass("open");
    }, 50);
  });

  // SpinnerInput add/substract action
  $(".spinner button").on("click", function(evt) {
    let isAdding = evt.currentTarget.getAttribute("data-action") == "plus",
      $input = $('input[name="passengers"]:checked'),
      $control = $input.siblings("div").find("span"),
      value = parseInt($control.text());

    if (isAdding) value++;
    else if (value !== 0) value--;

    $control.text(value);
  });

  // SelectInput find index
  $(".select-index").on("click", "li", function(evt) {
    let index = evt.currentTarget.textContent,
      $nano = $(evt.currentTarget)
        .parent(".select-index")
        .siblings(".nano"),
      el = $nano.find(`li.sep[data-index="${index}"]`)[0];

    $nano.find(".nano-content").animate({ scrollTop: el.offsetTop }, 600);
  });

  // SelectInput set data
  $(".select-data").on("click", "li:not(.sep)", function(evt) {
    let text = evt.currentTarget.textContent,
      iata = evt.currentTarget.getAttribute("data-iata"),
      $select = $(evt.currentTarget).closest(".select"),
      $nameContainer = $select.find(".airport-name");

    if ($nameContainer.data("role") == "from") {
      let _iata = iata.split("");
      let div = $(".header .fromPlace").addClass("rotate");
      let span = $(".header .fromPlace span");
      span.eq(0).text(_iata[0]);
      span.eq(1).text(_iata[1]);
      span.eq(2).text(_iata[2]);
      setTimeout(() => div.removeClass("rotate"), 900);
      //$('.xfrom').text(iata);
    } else {
      let _iata = iata.split("");
      let div = $(".header .toPlace").addClass("rotate");
      let span = $(".header .toPlace span");
      span.eq(0).text(_iata[0]);
      span.eq(1).text(_iata[1]);
      span.eq(2).text(_iata[2]);
      setTimeout(() => div.removeClass("rotate"), 900);
      //$('.xto').text(iata);
    }

    $nameContainer.text(text);
    $select.toggleClass("open");

    $(evt.currentTarget)
      .addClass("selected")
      .siblings("li")
      .removeClass("selected");
  });

  // Date input
  $(".calendar .days span").on("click", function(evt) {
    let $this = $(evt.currentTarget),
      day = evt.currentTarget.textContent;

    $this
      .addClass("checked")
      .siblings("span")
      .removeClass("checked");

    let date = new Date(`5/${day}/2017`);
    let [wd, m, d] = date.toDateString().split(" ");
    $(".dateinput .control-item span")
      .eq(0)
      .text(`${wd.toUpperCase()}, ${d} ${m}`);
  });

  $(".btnBack").on("click", function(evt) {
    let wrap = document.querySelector(".wrap"),
      index = parseInt(wrap.getAttribute("data-pos"));

    $(".ticket button.btnBook").text("Book Flight");
    wrap.setAttribute("data-pos", index - 1);
  });

  // Search button
  $(".btnSearch").on("click", function(evt) {
    doFlightsRender(false);
    setTimeout(() => {
      document.querySelector(".wrap").setAttribute("data-pos", 1);
    }, 50);
  });

  $(".ticket button").on("click", function(evt) {
    let $button = $(evt.currentTarget);
    let $loader = $(".loader").show();
    $button.text("Booking...");

    setTimeout(() => {
      $loader.hide();
      $button.html('<i class="zmdi zmdi-check-circle"></i> Flight Booked');
      $button.addClass("success");
    }, 1200);
  });

  // Select Flight
  $(".list").on("click", "article", function(evt) {
    let index = parseInt(evt.currentTarget.getAttribute("data-index")),
      flight = flights[index];

    let [from, t1, to, t2] = flight.nodes[0].split(" ");

    let p = $(".radio.passengers label span"),
      peopleTotal = 0,
      people = _.map(p, function(el, i) {
        let v = parseInt(el.textContent),
          str = "";

        if (i == 0 && v) str = `${v} Adults`;
        if (i == 1 && v) str = `${v} Kids`;
        if (i == 2 && v) str = `${v} Elders`;

        peopleTotal += v;

        return str;
      });

    from = $(".fromPlace span").text();
    to = $(".toPlace span").text();

    let time1 = new Date(t1),
      time2 = new Date(t2);

    let clase = $('input[name="seat"]:checked').val(),
      dates = $(".dateinput .control-item span"),
      place1 = _.findWhere(airports, { IATA: from }),
      place2 = _.findWhere(airports, { IATA: to });

    let flightRender = `
			<div class="title">
				<div>
					<small>${time1.toLocaleTimeString().replace(":00", "")}</small>
					<span>${from}</span>
					<small>${place1.city}</small>
				</div>
				<span class="separator"><i class="zmdi zmdi-airplane"></i></span>
				<div>
					<small>${time2.toLocaleTimeString().replace(":00", "")}</small>
					<span>${to}</span>
					<small>${place2.city}</small>
				</div>
			</div>
			<div class="row">
				<div class="cell">
					<small>Passengers</small><span>${_.compact(people).join(",")}</span>
				</div>
				<div class="cell">
					<small>Class</small><span>${clase}</span>
				</div>
			</div>
			<div class="row">
				<div class="cell">
					<small>Departure</small><span>${dates[0].textContent}</span>
				</div>
				<div class="cell">
					<small>Return</small><span>${dates[1].textContent}</span>
				</div>
			</div>
			<div class="row">
				<div class="cell">
					<small>Airline</small><span>${carrier[flight.carrier]}</span>
				</div>
				<div class="cell">
				</div>
			</div>
			<div class="total">
				<small>Total</small> <span>&euro;${(flight.price * peopleTotal).toFixed(
      2
    )}</span>
			</div>
		`;

    $(".ticket section").html(flightRender);
    setTimeout(() => {
      document.querySelector(".wrap").setAttribute("data-pos", 2);
    }, 50);
  });

  // Init scroll
  $(".nano").nanoScroller();

  function doFlightsRender(isInit) {
    let flightsRender = _.map(flights, function(o, i) {
      let sumText = "";
      let [from, t1, to, t2] = o.nodes[0].split(" ");

      let d1 = new Date(t1),
        d2 = new Date(t2);

      if (!isInit) {
        let ppl = $(".radio.passengers label span"),
          sum =
            parseInt(ppl.eq(0).text()) +
            parseInt(ppl.eq(1).text()) +
            parseInt(ppl.eq(2).text());

        sumText = `${sum} people &euro;${(o.price * sum).toFixed(2)}`;
        from = $(".fromPlace span").text();
        to = $(".toPlace span").text();
      }

      let img;
      if (o.carrier == "KL")
        img = "https://dl.dropbox.com/s/02ve5kn75rpo0s3/KL.png";
      else if (o.carrier == "BA")
        img = "https://dl.dropbox.com/s/6fpuy898zzuk7nn/BA.png";
      else img = "https://dl.dropbox.com/s/dhmufay65yer2jz/AF.png";

      return `<article data-index="${i}">
				<div class="img">
					<img src="${img}" alt="ualogo" />
				</div>
				<div class="info">
					<span class="time">${o.time}</span>
					<span class="airline">
						${d1.toLocaleTimeString().replace(":00", "")} - 
						${d2.toLocaleTimeString().replace(":00", "")}
					</span>
					<span>${carrier[o.carrier]} ${from} - ${to}</span>
					<span>Non-Stop</span>

					<h5><small>${sumText}</small> &euro;${o.price}</h5>
				</div>
			</article>`;
    });

    $(".list .nano-content").html(flightsRender.join(""));
  }
})();