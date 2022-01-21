"use strict";(self.webpackChunkAngularApp=self.webpackChunkAngularApp||[]).push([[314],{1314:(w,d,n)=>{n.r(d),n.d(d,{CategoryModule:()=>k});var c=n(8880),e=n(1223),h=n(7579),g=n(590),p=n(520);let _=(()=>{class i{constructor(t){this.http=t,this.sendDish$=new h.x,this.dishes=[]}loadDishes(){this.http.get("http://localhost:3000/dish").pipe((0,g.P)()).subscribe(t=>{console.log(t),this.dishes=[...t],this.sendDish$.next(this.dishes)})}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(p.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),f=(()=>{class i{constructor(t){this.http=t,this.uploadingCategories$=new h.x}loadCategories(){this.http.get("http://localhost:3000/category").pipe((0,g.P)()).subscribe(t=>{console.log(t),this.uploadingCategories$.next(t)})}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(p.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var a=n(9808),m=n(1321),C=n(5590);let v=(()=>{class i{constructor(t){this.basketService=t,this.dialogButton=new e.vpe}ngOnInit(){this.selectedDish=JSON.parse(JSON.stringify(this.selectedDishLink))}confirm(t){this.selectedDish.count&&this.basketService.saveDish(t),this.onPress()}onPress(){this.dialogButton.emit(!1)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(m.v))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-dialog-selected-dish"]],inputs:{selectedDishLink:"selectedDishLink"},outputs:{dialogButton:"dialogButton"},decls:17,vars:4,consts:[[1,"dialog"],[1,"dialog__container"],[1,"dialog__block"],[1,"dialog__message"],[1,"dialog__dish"],[1,"dialog__dish__image",3,"src"],[1,"dialog__dish__name"],[1,"dialog__dish__price"],[1,"Dialog__dish__count"],[3,"count","countChange"],[1,"dialog__dish__btn",3,"click"],[1,"dialog__btn",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"h1",3),e._uU(4,"Success"),e.qZA(),e.TgZ(5,"div",4),e._UZ(6,"img",5),e.TgZ(7,"div",6),e._uU(8),e.qZA(),e.TgZ(9,"div",7),e._uU(10),e.qZA(),e._UZ(11,"div",8),e.TgZ(12,"app-counter",9),e.NdJ("countChange",function(l){return o.selectedDish.count=l}),e.qZA(),e.TgZ(13,"button",10),e.NdJ("click",function(){return o.onPress()}),e._uU(14,"cancel"),e.qZA(),e.qZA(),e.TgZ(15,"button",11),e.NdJ("click",function(){return o.confirm(o.selectedDish)}),e._uU(16,"OK"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(6),e.Q6J("src",o.selectedDish.image,e.LSH),e.xp6(2),e.Oqu(o.selectedDish.name),e.xp6(2),e.Oqu(o.selectedDish.price),e.xp6(2),e.Q6J("count",o.selectedDish.count))},directives:[C.A],styles:[".dialog[_ngcontent-%COMP%]{width:100vw;height:100vh;background-color:#8680804d;position:absolute;top:0;right:0}.dialog__container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}.dialog__block[_ngcontent-%COMP%]{width:300px;height:160px;display:flex;position:absolute;justify-content:space-evenly;flex-direction:column;align-items:center;border:solid 2px #ccc;background:snow;border-radius:16px}.dialog__message[_ngcontent-%COMP%]{text-align:center;text-transform:uppercase;font-weight:700;font-size:32px}.dialog__btn[_ngcontent-%COMP%]{width:100px;height:40px;border:solid 2px yellow;border-radius:8px;transition:all .3s;font-size:24px;font-weight:700}.dialog__btn[_ngcontent-%COMP%]:hover{background-color:#ff0;color:#fff}.dialog__dish[_ngcontent-%COMP%]{width:60% px;height:50% px;border:solid #ccc 3px}.dialog__dish__image[_ngcontent-%COMP%]{height:200px;width:280px;border-radius:25px}"]}),i})();function x(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",3),e.TgZ(1,"div",4),e._UZ(2,"img",5),e.TgZ(3,"div",6),e._uU(4),e.qZA(),e.TgZ(5,"div",7),e._uU(6),e.qZA(),e.TgZ(7,"button",8),e.NdJ("click",function(){const l=e.CHM(t).$implicit;return e.oxw().selectDish(l)}),e._uU(8,"Add"),e.qZA(),e.qZA(),e.qZA()}if(2&i){const t=s.$implicit;e.xp6(2),e.Q6J("src",t.image,e.LSH),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.price)}}function y(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"app-dialog-selected-dish",9),e.NdJ("dialogButton",function(r){return e.CHM(t),e.oxw().onPress(r)}),e.qZA(),e.qZA()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("selectedDishLink",t.selectedDish)}}let D=(()=>{class i{constructor(){this.dishes=[],this.displayStatus=!1}selectDish(t){this.selectedDish=t,this.onPress()}onPress(t=!0){this.displayStatus=t}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-category-dishes"]],inputs:{dishes:"dishes"},decls:3,vars:2,consts:[[1,"container"],["class","item",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"item"],[1,"dish"],[1,"dish__image",3,"src"],[1,"dish__name"],[1,"dish__price"],[1,"dish__btn",3,"click"],[3,"selectedDishLink","dialogButton"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.YNc(1,x,9,3,"div",1),e.qZA(),e.YNc(2,y,2,1,"div",2)),2&t&&(e.xp6(1),e.Q6J("ngForOf",o.dishes),e.xp6(1),e.Q6J("ngIf",o.displayStatus&&o.selectedDish))},directives:[a.sg,a.O5,v],styles:[".dish[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:space-around;width:300px;height:500px;border:solid black 2px;border-radius:20px}.dish__image[_ngcontent-%COMP%]{height:200px;width:280px;border-radius:25px}.dish__name[_ngcontent-%COMP%]{text-transform:uppercase;font-weight:700;font-size:32px;text-align:center}.dish__btn[_ngcontent-%COMP%]{width:160px;height:70px;background-color:#fff;color:#0075ff;font-weight:600;font-size:24px;border:solid 2px #0075ff;border-radius:20px;transition:all .3s;cursor:pointer}.dish__btn[_ngcontent-%COMP%]:hover{background-color:#0075ff;color:#fff}.item[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:10px}.container[_ngcontent-%COMP%]{height:calc(100vh - 200px);width:calc(100vw - 220px);overflow-y:scroll;display:flex;justify-content:center;flex-direction:row;flex-wrap:wrap}.container[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#aaaaaa}.container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#555}"]}),i})();function b(i,s){if(1&i&&(e.TgZ(0,"div",4),e._UZ(1,"button",5),e.qZA()),2&i){const t=s.$implicit;e.xp6(1),e.Jzz("background-image: url(",t.image,");"),e.Q6J("routerLink","/categories/"+t.name)("routerLinkActive","active")}}let u=(()=>{class i{constructor(t,o,r){this.route=t,this.dishesService=o,this.categoryService=r,this.categories=[],this.dishes=[],this.filtredDishes=[]}ngOnInit(){this.categoryService.loadCategories(),this.subscription=this.categoryService.uploadingCategories$.subscribe(t=>{this.categories=t}),this.catUrl=this.route.snapshot.params.catUrl,this.subscription=this.dishesService.sendDish$.subscribe(t=>{this.dishes=t,console.log(t)}),this.dishesService.loadDishes(),this.fileredDish()}ngDoCheck(){this.catUrl=this.route.snapshot.params.catUrl,this.fileredDish()}fileredDish(){let t="";this.categories.map(o=>{o.name===this.catUrl&&(t=o.id)}),console.log(t),this.filtredDishes=this.dishes.filter(o=>o.category.includes(t)),console.log(this.filtredDishes)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.gz),e.Y36(_),e.Y36(f))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-category"]],decls:4,vars:2,consts:[[1,"main"],[1,"list"],["class","item",4,"ngFor","ngForOf"],[3,"dishes"],[1,"item"],[1,"category__button",3,"routerLink","routerLinkActive"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.YNc(2,b,2,5,"div",2),e.qZA(),e._UZ(3,"app-category-dishes",3),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngForOf",o.categories),e.xp6(1),e.Q6J("dishes",o.filtredDishes))},directives:[a.sg,D,c.rH,c.Od],styles:[".category[_ngcontent-%COMP%]{display:flex}.category__button[_ngcontent-%COMP%]{width:180px;height:100px;margin-bottom:10px;background-size:cover;font-size:16px;cursor:pointer}.list[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;height:310px;margin-top:160px;width:200px;margin-left:40px}.main[_ngcontent-%COMP%]{display:flex;flex-direction:row}"]}),i})();var Z=n(274);const O=[{path:"",component:u},{path:":catUrl",component:u}];let k=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[],imports:[[c.Bz.forChild(O),a.ez,Z.m]]}),i})()}}]);