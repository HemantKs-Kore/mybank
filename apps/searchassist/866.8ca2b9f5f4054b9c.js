"use strict";(self.webpackChunksearchassist=self.webpackChunksearchassist||[]).push([[866],{1866:(I,M,t)=>{t.r(M),t.d(M,{SearchSettingsModule:()=>F});var b=t(70262),l=t(56622),O=t(39646),_=t(91005),e=t(94650),r=t(22404);let a=(()=>{class n{constructor(o,c){this.workflowService=o,this.service=c}resolve(o){let c=o.data.value;const s={isSelected:!0,sortField:"fieldName",orderType:"asc",indexPipelineId:this.workflowService.selectedIndexPipeline(),streamId:this.workflowService.selectedApp()?._id,queryPipelineId:this.workflowService.selectedQueryPipeline()?this.workflowService.selectedQueryPipeline()._id:"",searchKey:""};return this.service.invoke(c,s).pipe((0,b.K)(d=>(console.error(`Retrieval error: ${d}`),(0,O.of)({error:d}))))}}return n.\u0275fac=function(o){return new(o||n)(e.LFG(r.z),e.LFG(l.Q))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})(),C=(()=>{class n{constructor(o,c){this.workflowService=o,this.service=c}resolve(o){let c=o.data.pipeline;const s={indexPipelineId:this.workflowService.selectedIndexPipeline(),queryPipelineId:this.workflowService.selectedQueryPipeline()?this.workflowService.selectedQueryPipeline()._id:"",searchIndexID:this.workflowService.selectedApp()?.searchIndexes[0]?._id};return s.queryPipelineId?this.service.invoke(c,s).pipe((0,_.g)(10)):(0,O.of)(null)}}return n.\u0275fac=function(o){return new(o||n)(e.LFG(r.z),e.LFG(l.Q))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();var h=t(36895),g=t(29197),m=t(66166),k=t(51483),p=t(89758);const f=function(n){return{"beta-active":n}};function u(n,i){if(1&n&&(e.TgZ(0,"div",13),e._uU(1,"BETA"),e.qZA()),2&n){const o=e.oxw(2);e.Q6J("ngClass",e.VKq(1,f,"/search-settings/custom_configurations"===o.router.url))}}const x=function(n){return[n]};function S(n,i){if(1&n&&(e.TgZ(0,"div",9)(1,"div",10)(2,"button",11),e._uU(3),e.qZA()(),e.YNc(4,u,2,3,"div",12),e.qZA()),2&n){const o=i.$implicit;e.xp6(2),e.Q6J("routerLink",e.VKq(3,x,o.value)),e.xp6(1),e.hij(" ",o.key," "),e.xp6(1),e.Q6J("ngIf","custom_configurations"==o.value)}}const y=[{path:"",component:(()=>{class n{constructor(o,c,s,d,P){this.workflowService=o,this.appSelectionService=c,this.notificationService=s,this.service=d,this.router=P,this.pipeline=[],this.selectedComponent="weights",this.componentsArray=[{key:"Weights",value:"weights"},{key:"Presentable",value:"presentable"},{key:"Highlighting",value:"highlighting"},{key:"Spell Correction",value:"spell_correction"},{key:"Snippets",value:"snippets"},{key:"Search Relevance",value:"search_relevance"},{key:"Synonyms",value:"synonyms"},{key:"Stop Words",value:"stop_words"},{key:"Bot Actions",value:"bot_actions"},{key:"Small Talk",value:"small_talk"},{key:"Custom Configurations",value:"custom_configurations"}]}ngOnInit(){this.selectedApp=this.workflowService.selectedApp(),this.serachIndexId=this.selectedApp?.searchIndexes[0]._id,this.indexPipelineId=this.workflowService.selectedIndexPipeline(),this.queryPipelineId=this.workflowService.selectedQueryPipeline()?this.workflowService.selectedQueryPipeline()._id:"",this.indexPipelineId&&this.queryPipelineId&&this.getQuerypipeline(),this.querySubscription=this.appSelectionService.queryConfigSelected.subscribe(o=>{this.indexPipelineId=this.workflowService.selectedIndexPipeline(),this.queryPipelineId=this.workflowService.selectedQueryPipeline()?this.workflowService.selectedQueryPipeline()._id:"",this.getQuerypipeline()}),this.openWeightsScreen()}getQuerypipeline(){this.service.invoke("get.queryPipeline",{searchIndexID:this.serachIndexId,queryPipelineId:this.queryPipelineId,indexPipelineId:this.indexPipelineId}).subscribe(c=>{this.pipeline=c},c=>{this.notificationService.notify("failed to get querypipeline details","error")})}openWeightsScreen(){"/search-settings"===this.router.url&&this.router.navigateByUrl("search-settings/weights",{skipLocationChange:!0})}ngOnDestroy(){this.querySubscription&&this.querySubscription.unsubscribe()}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(r.z),e.Y36(m.n),e.Y36(k.g),e.Y36(l.Q),e.Y36(g.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-search-settings"]],decls:11,vars:1,consts:[[1,"searchSettingsComponent"],[1,"common_header"],[1,"title"],[1,"search-settings-main-block"],[1,"search-settings-left"],[1,"search-settings-left-menu-scroll"],[1,"scoll-data-wrapper"],["class","array-loop",4,"ngFor","ngForOf"],[1,"search-settings-right"],[1,"array-loop"],[1,"side-menu-tab-block"],["skipLocationChange","","routerLinkActive","btn-active",1,"btn","side-menu-tab-btn",3,"routerLink"],["class","vr-beta",3,"ngClass",4,"ngIf"],[1,"vr-beta",3,"ngClass"]],template:function(o,c){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3,"Search Settings "),e.qZA()(),e.TgZ(4,"div",3)(5,"div",4)(6,"perfect-scrollbar",5)(7,"div",6),e.YNc(8,S,5,5,"div",7),e.qZA()()(),e.TgZ(9,"div",8),e._UZ(10,"router-outlet"),e.qZA()()()),2&o&&(e.xp6(8),e.Q6J("ngForOf",c.componentsArray))},dependencies:[h.mk,h.sg,h.O5,p.Vv,g.lC,g.rH,g.Od],styles:['.searchSettingsComponent[_ngcontent-%COMP%]   .common_header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:17px 24px;margin:0;background:#F8F9FA;border-radius:4px}.searchSettingsComponent[_ngcontent-%COMP%]   .common_header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:500;font-size:18px;line-height:22px;color:#000}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;background:#F8F9FA}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-left[_ngcontent-%COMP%]{width:22%;flex-shrink:0;padding:0 0 0 15px}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-left[_ngcontent-%COMP%]   .search-settings-left-menu-scroll[_ngcontent-%COMP%]{height:calc(100vh - 130px)}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-left[_ngcontent-%COMP%]   .side-menu-tab-block[_ngcontent-%COMP%]   .side-menu-tab-btn[_ngcontent-%COMP%]{background:#FFFFFF;border-radius:4px;font-weight:600;font-size:12px;line-height:15px;color:#121314;height:40px;margin:5px 0;width:98%;text-align:left;border-left:4px solid #fff}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-left[_ngcontent-%COMP%]   .side-menu-tab-block[_ngcontent-%COMP%]   .side-menu-tab-btn[_ngcontent-%COMP%]:first-child{margin:0 0 5px}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-left[_ngcontent-%COMP%]   .side-menu-tab-block[_ngcontent-%COMP%]   .side-menu-tab-btn.btn-active[_ngcontent-%COMP%]{border-left:4px solid #0D6EFD;color:#0d6efd;box-shadow:0 1px 2px #bdc1c6}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-left[_ngcontent-%COMP%]   .side-menu-tab-block[_ngcontent-%COMP%]   .side-menu-tab-btn[_ngcontent-%COMP%]:hover{color:#0d6efd}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-left[_ngcontent-%COMP%]   .side-menu-tab-block[_ngcontent-%COMP%]   .side-menu-tab-btn[_ngcontent-%COMP%]:focus{outline:none!important;box-shadow:none!important}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-left[_ngcontent-%COMP%]   .scoll-data-wrapper[_ngcontent-%COMP%]{padding-right:15px}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-left[_ngcontent-%COMP%]   .scoll-data-wrapper[_ngcontent-%COMP%]   .array-loop[_ngcontent-%COMP%]{position:relative}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-left[_ngcontent-%COMP%]   .scoll-data-wrapper[_ngcontent-%COMP%]   .vr-beta[_ngcontent-%COMP%]{color:#2d2f33;font-weight:400;font-size:8px;line-height:initial;padding:3px 8px;background:#E3E4E6;display:inherit;position:absolute;right:-7px;bottom:18px;z-index:auto;overflow:inherit}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-left[_ngcontent-%COMP%]   .scoll-data-wrapper[_ngcontent-%COMP%]   .vr-beta[_ngcontent-%COMP%]:before{content:"";display:block;position:absolute;top:15.6px;right:0;z-index:0;transform:rotate(0);width:0px;height:0px;border-top:10px solid #9DA1A6;border-right:10px solid transparent}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-left[_ngcontent-%COMP%]   .scoll-data-wrapper[_ngcontent-%COMP%]   .vr-beta.beta-active[_ngcontent-%COMP%]{background:#85B7FE!important;color:#fff}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-left[_ngcontent-%COMP%]   .scoll-data-wrapper[_ngcontent-%COMP%]   .vr-beta.beta-active[_ngcontent-%COMP%]:before{border-top:10px solid #5591E9!important;border-right:10px solid transparent}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]{width:78%;background:#fff;height:calc(100vh - 100px);overflow-y:auto}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .page-common-scroll[_ngcontent-%COMP%]{height:calc(100vh - 120px)}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .landing-page-common-block[_ngcontent-%COMP%]{padding:0 20px 0 35px}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .landing-page-common-block[_ngcontent-%COMP%]   .widget-header-block[_ngcontent-%COMP%]{padding:35px 0 15px}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .landing-page-common-block[_ngcontent-%COMP%]   .widget-header-block.second-header-block[_ngcontent-%COMP%]{padding:25px 0 15px}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .landing-page-common-block[_ngcontent-%COMP%]   .widget-header-block[_ngcontent-%COMP%]   .widget-header[_ngcontent-%COMP%]{font-weight:500;font-size:14px;line-height:17px;color:#121314;padding-bottom:10px}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .landing-page-common-block[_ngcontent-%COMP%]   .widget-header-block[_ngcontent-%COMP%]   .widget-desc[_ngcontent-%COMP%]{font-weight:400;font-size:12px;line-height:15px;color:#777a80}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .landing-page-common-block[_ngcontent-%COMP%]   .landing-page-toggle[_ngcontent-%COMP%]{padding:0 20px 25px 0}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .landing-page-common-block[_ngcontent-%COMP%]   .landing-page-toggle[_ngcontent-%COMP%]   .kr-sg-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:checked) + .slider[_ngcontent-%COMP%]   span.no[_ngcontent-%COMP%]{color:#202124}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .landing-page-common-block[_ngcontent-%COMP%]   .landing-page-toggle[_ngcontent-%COMP%]   .kr-sg-toggle.with-label[_ngcontent-%COMP%]{margin-left:49px}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .landing-page-common-block[_ngcontent-%COMP%]   .landing-page-toggle[_ngcontent-%COMP%]   .kr-sg-toggle.with-label[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]   .no[_ngcontent-%COMP%]{margin-left:-49px}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .landing-page-common-block[_ngcontent-%COMP%]   .application-type[_ngcontent-%COMP%]{padding-top:40px}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .landing-page-common-block[_ngcontent-%COMP%]   .application-type[_ngcontent-%COMP%]   .application-type-header[_ngcontent-%COMP%]{font-weight:500;font-size:12px;line-height:15px;color:#000;padding-bottom:15px}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .landing-page-common-block[_ngcontent-%COMP%]   .application-type[_ngcontent-%COMP%]   .application-type-block[_ngcontent-%COMP%]{background:#F0F1F2;border-radius:4px;height:240px}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]{padding:35px 20px 15px 35px}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .splitter-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .splitter-header[_ngcontent-%COMP%]   .add-field-link-btn[_ngcontent-%COMP%]{color:#9da1a6;font-weight:400;font-size:14px;line-height:20px;cursor:pointer}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .widget-header-block[_ngcontent-%COMP%]   .widget-header[_ngcontent-%COMP%]{font-weight:500;font-size:14px;line-height:17px;color:#121314;padding-bottom:10px}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .widget-header-block[_ngcontent-%COMP%]   .widget-desc[_ngcontent-%COMP%]{font-weight:400;font-size:12px;line-height:15px;color:#777a80}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .cc-table-filter-block[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:20px 0 15px}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .cc-table-filter-block[_ngcontent-%COMP%]   .cc-add[_ngcontent-%COMP%]   .add-field-link-btn[_ngcontent-%COMP%]{color:#2b75e4;font-weight:500;font-size:14px;line-height:17px;cursor:pointer}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .cc-table-filter-block[_ngcontent-%COMP%]   .cc-add[_ngcontent-%COMP%]   .add-field-link-btn[_ngcontent-%COMP%]   .icon-add-span[_ngcontent-%COMP%]{font-size:11px}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .cc-table-filter-block[_ngcontent-%COMP%]   .cc-add[_ngcontent-%COMP%]   .add-field-link-btn[_ngcontent-%COMP%]   .icon-add-span[_ngcontent-%COMP%]   .icon-add[_ngcontent-%COMP%]{padding:0 5px 0 0}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .cc-table-filter-block[_ngcontent-%COMP%]   .cc-add[_ngcontent-%COMP%]   .add-field-link-btn[_ngcontent-%COMP%]   .icon-add-span[_ngcontent-%COMP%]   .icon-add[_ngcontent-%COMP%]:before{color:#0d6efd;font-weight:600}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .cc-table-filter-block[_ngcontent-%COMP%]   .cc-search[_ngcontent-%COMP%]   .kr-sg-input-inline-search[_ngcontent-%COMP%]   .input-search[_ngcontent-%COMP%]{padding-left:30px;height:34px;border-radius:4px;border:solid 1px #BDC1C6;background-color:#fff;color:#202124;font-size:14px}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .cc-table-filter-block[_ngcontent-%COMP%]   .cc-search[_ngcontent-%COMP%]   .kr-sg-input-inline-search[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]{font-size:14px;color:#bdc1c6}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .cc-table-filter-block[_ngcontent-%COMP%]   .cc-search[_ngcontent-%COMP%]   .kr-sg-input-inline-search[_ngcontent-%COMP%]   .search-icon.close-icon[_ngcontent-%COMP%]{font-size:10px;color:#bdc1c6}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .custom-config-table[_ngcontent-%COMP%]{padding:15px 0 25px}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .custom-config-table[_ngcontent-%COMP%]   .table_data_content[_ngcontent-%COMP%]{padding:0;text-align:left}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .custom-config-table[_ngcontent-%COMP%]   .table_data_content[_ngcontent-%COMP%]   .table_header[_ngcontent-%COMP%]{padding:15px 0;border-bottom:1px solid #E4E5E7}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .custom-config-table[_ngcontent-%COMP%]   .table_data_content[_ngcontent-%COMP%]   .table_header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{padding:0;font-style:normal;font-weight:500;font-size:12px;line-height:14px;text-transform:uppercase;color:#777a80}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .custom-config-table[_ngcontent-%COMP%]   .table_data_content[_ngcontent-%COMP%]   .table_header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .filter-sort[_ngcontent-%COMP%]   .icon-up[_ngcontent-%COMP%], .searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .custom-config-table[_ngcontent-%COMP%]   .table_data_content[_ngcontent-%COMP%]   .table_header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .filter-sort[_ngcontent-%COMP%]   .icon-down[_ngcontent-%COMP%]{font-size:8px;color:#202124;font-weight:600}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .custom-config-table[_ngcontent-%COMP%]   .table_data_content[_ngcontent-%COMP%]   .table_header[_ngcontent-%COMP%]   .col_[_ngcontent-%COMP%]{font-weight:500;color:#9aa0a6;font-size:12px;cursor:pointer;justify-content:center}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .custom-config-table[_ngcontent-%COMP%]   .table_data_content[_ngcontent-%COMP%]   .table_body_content[_ngcontent-%COMP%]{height:calc(100vh - 350px);text-align:left}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .custom-config-table[_ngcontent-%COMP%]   .table_data_content[_ngcontent-%COMP%]   .table_body_content.custom-config-table-body[_ngcontent-%COMP%]   .table_body[_ngcontent-%COMP%]   .kr-sg-input-text.cc-input-text[_ngcontent-%COMP%]{width:90%}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .custom-config-table[_ngcontent-%COMP%]   .table_data_content[_ngcontent-%COMP%]   .table_body_content[_ngcontent-%COMP%]   .table_body[_ngcontent-%COMP%]{padding:15px 0;box-shadow:inset 0 -1px #e4e5e7;transition:.3s all ease-in;align-items:center}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .custom-config-table[_ngcontent-%COMP%]   .table_data_content[_ngcontent-%COMP%]   .table_body_content[_ngcontent-%COMP%]   .table_body[_ngcontent-%COMP%]:hover{background:#F8F9FA}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .custom-config-table[_ngcontent-%COMP%]   .table_data_content[_ngcontent-%COMP%]   .table_body_content[_ngcontent-%COMP%]   .table_body[_ngcontent-%COMP%]:hover   .action_links[_ngcontent-%COMP%]{visibility:visible}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .custom-config-table[_ngcontent-%COMP%]   .table_data_content[_ngcontent-%COMP%]   .table_body_content[_ngcontent-%COMP%]   .table_body[_ngcontent-%COMP%]:hover   .action_links[_ngcontent-%COMP%]   .action_link-icon[_ngcontent-%COMP%]{cursor:pointer}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .custom-config-table[_ngcontent-%COMP%]   .table_data_content[_ngcontent-%COMP%]   .table_body_content[_ngcontent-%COMP%]   .table_body[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{padding:0 5px 0 22px;font-weight:500;font-size:12px;line-height:normal;color:#202124;cursor:default;word-break:break-word;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .custom-config-table[_ngcontent-%COMP%]   .table_data_content[_ngcontent-%COMP%]   .table_body_content[_ngcontent-%COMP%]   .table_body[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .custom-config-table[_ngcontent-%COMP%]   .table_data_content[_ngcontent-%COMP%]   .table_body_content[_ngcontent-%COMP%]   .table_body[_ngcontent-%COMP%]   .action_links[_ngcontent-%COMP%]{padding:0;visibility:hidden}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .custom-config-table[_ngcontent-%COMP%]   .table_data_content[_ngcontent-%COMP%]   .table_body_content[_ngcontent-%COMP%]   .table_body[_ngcontent-%COMP%]   .action_links[_ngcontent-%COMP%]   .action_link-icon[_ngcontent-%COMP%]{margin-right:5px}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .custom-config-table[_ngcontent-%COMP%]   .table_data_content[_ngcontent-%COMP%]   .table_body_content[_ngcontent-%COMP%]   .table_body[_ngcontent-%COMP%]   .action_links[_ngcontent-%COMP%]   .action_link-icon.link-delete[_ngcontent-%COMP%]{color:#dd3646;font-size:12px;font-weight:500;line-height:inherit}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .custom-config-table[_ngcontent-%COMP%]   .table_data_content[_ngcontent-%COMP%]   .table_body_content[_ngcontent-%COMP%]   .table_body[_ngcontent-%COMP%]   .action_links[_ngcontent-%COMP%]   .field-edit-mode[_ngcontent-%COMP%]{font-size:10px}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .custom-config-table[_ngcontent-%COMP%]   .table_data_content[_ngcontent-%COMP%]   .table_body_content[_ngcontent-%COMP%]   .table_body[_ngcontent-%COMP%]   .action_links[_ngcontent-%COMP%]   .field-edit-mode[_ngcontent-%COMP%]   .action_link-icon[_ngcontent-%COMP%]{margin-right:5px}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .custom-config-table[_ngcontent-%COMP%]   .table_data_content[_ngcontent-%COMP%]   .table_body_content[_ngcontent-%COMP%]   .table_body[_ngcontent-%COMP%]   .action_links[_ngcontent-%COMP%]   .field-edit-mode[_ngcontent-%COMP%]   .action_link-icon[_ngcontent-%COMP%]   .si-check[_ngcontent-%COMP%]:before{color:#0d6efd}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .custom-config-table[_ngcontent-%COMP%]   .table_data_content[_ngcontent-%COMP%]   .table_body_content[_ngcontent-%COMP%]   .table_body[_ngcontent-%COMP%]   .action_links[_ngcontent-%COMP%]   .field-edit-mode[_ngcontent-%COMP%]   .action_link-icon[_ngcontent-%COMP%]   .si-close[_ngcontent-%COMP%], .searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .custom-config-table[_ngcontent-%COMP%]   .table_data_content[_ngcontent-%COMP%]   .table_body_content[_ngcontent-%COMP%]   .table_body[_ngcontent-%COMP%]   .action_links[_ngcontent-%COMP%]   .field-edit-mode[_ngcontent-%COMP%]   .action_link-icon.link-delete[_ngcontent-%COMP%]{color:#dd3646}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .custom-config-table[_ngcontent-%COMP%]   .table_data_content[_ngcontent-%COMP%]   .table_body_content[_ngcontent-%COMP%]   .table_body[_ngcontent-%COMP%]   .action_links[_ngcontent-%COMP%]   .field-edit-mode[_ngcontent-%COMP%]   .action_link-icon[_ngcontent-%COMP%]:last-child{margin-right:0}.searchSettingsComponent[_ngcontent-%COMP%]   .search-settings-main-block[_ngcontent-%COMP%]   .search-settings-right[_ngcontent-%COMP%]   .cc-landing-page-block[_ngcontent-%COMP%]   .cc-table-block[_ngcontent-%COMP%]   .custom-config-table[_ngcontent-%COMP%]   .table_data_content[_ngcontent-%COMP%]   .footer-simulate[_ngcontent-%COMP%]{text-align:right;margin:30px 0}  app-weights .contentContainer .header-sec-stopwords{background:#fff!important;padding:15px 20px 15px 40px!important}  app-weights .contentContainer .kr-sg-data-table .table-content{display:block!important;width:100%!important;padding:0 20px 0 40px!important}  app-weights .contentContainer .kr-sg-data-table .table-content .scroll-table-allowRow{height:calc(100vh - 280px);padding:0!important}  app-weights .contentContainer .kr-sg-data-table .table-content .scroll-table-allowRow .content-body .sliderContainer .range-slider{margin-right:5px!important}  app-weights .contentContainer .kr-sg-data-table .table-content .scroll-table-allowRow .content-body .sliderContainer .range-slider app-range-slider .custom-created-range-slider .single-slider{margin-bottom:0!important;width:150px!important}  app-weights .contentContainer .kr-sg-data-table .table-content .scroll-table-allowRow .content-body .sliderContainer .range-slider app-range-slider .custom-created-range-slider .single-slider .countThreshold{width:150px!important}  app-weights .contentContainer .kr-sg-data-table .table-content .scroll-table-allowRow .content-body .sliderContainer .range-slider app-range-slider .custom-created-range-slider .single-slider .slider-horizontal{width:150px!important}  app-weights .contentContainer .kr-sg-data-table .table-content .scroll-table-allowRow .content-body .sliderContainer .sliderVal{font-size:14px!important;line-height:22px;font-weight:700;color:#202124}  app-weights .contentContainer .kr-sg-data-table .table-content .scroll-table-allowRow .content-body .sliderContainer .action_links .actions-links:first-child{padding-right:10px!important}']}),n})(),children:[{path:"weights",loadChildren:()=>Promise.all([t.e(36),t.e(592),t.e(6)]).then(t.bind(t,28006)).then(n=>n.WeightsModule),resolve:{weights:a,queryPipeline:C},data:{value:"get.weightsList",pipeline:"get.queryPipeline"}},{path:"presentable",loadChildren:()=>Promise.all([t.e(605),t.e(468)]).then(t.bind(t,70468)).then(n=>n.PresentableModule),resolve:{presentables:a},data:{value:"get.presentableFields"}},{path:"highlighting",loadChildren:()=>Promise.all([t.e(605),t.e(774)]).then(t.bind(t,95774)).then(n=>n.HighlightingModule),resolve:{highlighting:a,queryPipeline:C},data:{value:"get.highlightFields",pipeline:"get.queryPipeline"}},{path:"spell_correction",loadChildren:()=>Promise.all([t.e(605),t.e(141)]).then(t.bind(t,6141)).then(n=>n.SpellCorrectionModule),resolve:{spells:a,queryPipeline:C},data:{value:"get.spellcorrectFields",pipeline:"get.queryPipeline"}},{path:"snippets",loadChildren:()=>t.e(849).then(t.bind(t,52849)).then(n=>n.SnippetsModule)},{path:"synonyms",loadChildren:()=>Promise.all([t.e(234),t.e(445)]).then(t.bind(t,32445)).then(n=>n.SynonymsModule)},{path:"stop_words",loadChildren:()=>Promise.all([t.e(36),t.e(432)]).then(t.bind(t,56432)).then(n=>n.StopWordsModule)},{path:"bot_actions",loadChildren:()=>t.e(724).then(t.bind(t,8724)).then(n=>n.BotActionsModule)},{path:"small_talk",loadChildren:()=>t.e(40).then(t.bind(t,22040)).then(n=>n.SmallTalkModule)},{path:"custom_configurations",loadChildren:()=>t.e(684).then(t.bind(t,64684)).then(n=>n.CustomConfigurationsModule)},{path:"search_relevance",loadChildren:()=>Promise.all([t.e(592),t.e(887)]).then(t.bind(t,35887)).then(n=>n.SearchRelevanceModule)},{path:"",redirectTo:"weights",pathMatch:"full"}]}];let v=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(y),g.Bz]}),n})();var w=t(65728);let F=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[a,C,r.z,l.Q],imports:[h.ez,p.Xd,v,w.IJ]}),n})()}}]);