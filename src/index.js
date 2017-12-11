import {Observable} from 'rxjs';

Observable.interval(1000).subscribe(
    i => (document.getElementById("app").innerHTML = `<h1>Compass Admin Console poi ${i}</h1>`)
)
