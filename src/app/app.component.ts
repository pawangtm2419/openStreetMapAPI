import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'map';
  locationInfo : any = [];
  constructor(private service: AppService) { }

  getLocInfo() {
    const lat = (<HTMLInputElement>document.getElementById('lat')).value;
    const lon = (<HTMLInputElement>document.getElementById('lon')).value;
    const appURL = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat="+lat+"&lon="+lon;
    //const appURL = "https://nominatim.openstreetmap.org/reverse?format=geojson&lat="+lat+"&lon="+lon;
    this.service.getLocationInfo(appURL).subscribe((res) => {
      this.locationInfo = res;
      document.getElementById('loc').innerHTML = this.locationInfo.display_name;
      console.log(this.locationInfo)
    });
  }
  
}
