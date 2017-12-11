import {Observable} from 'rxjs';

Observable.interval(1000).subscribe(
    i => (document.getElementById("app").innerHTML = `<h1>Hello poi ${i}</h1>`)
)
