(function(){
    function KnuthSort() {
        var i = this.length, j, temp, out = this.slice();
        while ( --i )
        {
            j = Math.floor( Math.random() * (i - 1) );
            temp = out[i];
            out[i] = out[j];
            out[j] = temp;
        }
        return out;
    }
    String.prototype.lpad = function(padding, length)
    {
        var out = this;
        while (out.length < length) {
            out = padding + out;
        }
        return out;

    }
    Array.prototype.shuffle = function(times)
    {
        times = times || 1;
        var out = this.slice();
        while (times--)
        {
            out = KnuthSort.apply(out);
        }
        return out;
    }

    var DB = {
            first: [
                'Sara','John','Mario','Samantha','Seth','Ryan','Sy','Bob','David','Colonel',
                'Adam','Alyx','Alexander'
            ],
            last: [
                'Barker','Bowie','Grey','White','Red','Mustard','Devore','Sinatra',
                'Martin','Clooney','Black'
            ],
            phoneType: ['Home', 'Mobile', 'Work'],
            streets: ['Turing Road', "Knuth Blvd", "C Lane", "x86 Blvd"],
            add2: ["", "", "Suite Hash", "Suite VM", "Apt Str"],
            cities: ['Dev Island', 'Assembly Valley', 'POSIX Mountain'],
            state: ['Devtopia'],
        },
        DOM = {
            first: document.getElementById('first'),
            last: document.getElementById('last'),
            phone: document.getElementById('phone'),
            phoneType: document.getElementById('phoneType'),
            email: document.getElementById('email'),
            address1: document.getElementById('address1'),
            address2: document.getElementById('address2'),
            city: document.getElementById('city'),
            state: document.getElementById('state'),
            zip: document.getElementById('zip'),
            button: document.getElementById('randomize'),
        }
    function randomStreet() {
        return Math.floor(Math.random() * 1024).toString(2).lpad(0,10) + ' ' + DB.streets.shuffle(100)[0];
    }
    function randomPhone() {
        var number = Math.floor(Math.random() * 1024)
            .toString(2)
            .lpad(0,10)
            .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        return number;
    }
    function randomContact() {
        DOM.first.innerHTML = DB.first.shuffle(100)[0];
        DOM.last.innerHTML = DB.last.shuffle(100)[0];
        DOM.phone.innerHTML = randomPhone();
        DOM.phoneType.innerHTML = DB.phoneType[Math.floor(Math.random()*3)];
        DOM.email.innerHTML = (DOM.first.innerHTML + "@" + DOM.last.innerHTML + ".museum");
        DOM.address1.innerHTML = randomStreet();
        DOM.address2.innerHTML = DB.add2.shuffle(100)[0];
        DOM.city.innerHTML = DB.cities.shuffle(100)[0];
        DOM.state.innerHTML = DB.state.shuffle(100)[0];
        DOM.zip.innerHTML = Math.floor(Math.random() * 32).toString(2).lpad(0,5);

    }

    randomContact();
}());
