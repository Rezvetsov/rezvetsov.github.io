(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{253:function(e,r,_){e.exports=_.p+"img/type_1.01ad3f7.png"},254:function(e,r,_){e.exports=_.p+"img/type_2.6503e41.png"},255:function(e,r,_){e.exports=_.p+"img/type_3.cbe96ae.png"},256:function(e){e.exports=JSON.parse('{"econom":[{"name":"Вахтовый","descr_name":"(12 ч.)","price_hour":130,"price":65000,"price_hour_with_weapon":"150","price_with_weapon":70000},{"name":"Суточный","descr_name":"(2/2)","price_hour":145,"price":85000,"price_hour_with_weapon":165,"price_with_weapon":90000},{"name":"Суточный","descr_name":"(1/2)","price_hour":150,"price":95000,"price_hour_with_weapon":170,"price_with_weapon":100000},{"name":"Дневной (ночной)","descr_name":"(12 ч., пн-вс)","price_hour":140,"price":75000,"price_hour_with_weapon":160,"price_with_weapon":80000},{"name":"Дневной (ночной)","descr_name":"(12 ч., пн-пт)","price_hour":135,"price":70000,"price_hour_with_weapon":155,"price_with_weapon":75000}],"standart":[{"name":"Вахтовый","descr_name":"(12 ч.)","price_hour":140,"price":80000,"price_hour_with_weapon":160,"price_with_weapon":85000},{"name":"Суточный","descr_name":"(2/2)","price_hour":165,"price":105000,"price_hour_with_weapon":185,"price_with_weapon":110000},{"name":"Суточный","descr_name":"(1/2)","price_hour":170,"price":125000,"price_hour_with_weapon":190,"price_with_weapon":130000},{"name":"Дневной (ночной)","descr_name":"(12 часов, пн-вс)","price_hour":145,"price":85000,"price_hour_with_weapon":165,"price_with_weapon":90000},{"name":"Дневной (ночной)","descr_name":"(12 часов, пн-пт)","price_hour":140,"price":75000,"price_hour_with_weapon":160,"price_with_weapon":80000}],"premium":[{"name":"Вахтовый","descr_name":"(12 ч.)","price_hour":145,"price":85000,"price_hour_with_weapon":165,"price_with_weapon":90000},{"name":"Суточный","descr_name":"(2/2)","price_hour":175,"price":120000,"price_hour_with_weapon":195,"price_with_weapon":125000},{"name":"Суточный","descr_name":"(1/2)","price_hour":185,"price":135000,"price_hour_with_weapon":200,"price_with_weapon":140000},{"name":"Дневной (ночной)","descr_name":"(12 ч., пн-вс)","price_hour":165,"price":100000,"price_hour_with_weapon":185,"price_with_weapon":105000},{"name":"Дневной (ночной)","descr_name":"(12 часов, пн-пт)","price_hour":145,"price":85000,"price_hour_with_weapon":165,"price_with_weapon":90000}]}')},257:function(e,r,_){"use strict";_.r(r);var t=_(256),c={name:"tariffs",data:function(){return{name_page:"Тарифы",tarrifs:t,fields:[{label:"Режим",key:"mode"},{label:"Невооруженная",key:"unarmed"},{label:"Вооруженная",key:"armed"}]}}},n=_(37),component=Object(n.a)(c,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"page",attrs:{id:"tariffs"}},[t("b-container",[t("h1",[e._v(e._s(e.name_page))]),e._v(" "),t("div",{staticClass:"flex-container"},[t("div",{staticClass:"type"},[t("h3",[e._v("Эконом")]),e._v(" "),t("img",{attrs:{src:_(253),alt:"тип_1"}}),e._v(" "),t("p",{staticClass:"text "},[e._v("Сотрудники с хорошим телосложением, имеющие  разряд не выше 5-го, с опытом работы от 1 года, обучены для выполнения общенаблюдательных функций и обеспечения пропускного режима")]),e._v(" "),t("b-table",{staticClass:"text",attrs:{hover:"",items:e.tarrifs.econom,fields:e.fields},scopedSlots:e._u([{key:"cell(mode)",fn:function(r){var _=r.item;return[t("div",{staticClass:"text"},[e._v(e._s(_.name))]),e._v(" "),t("span",{staticClass:"text_descr"},[e._v(e._s(_.descr_name))])]}},{key:"cell(unarmed)",fn:function(r){var _=r.item;return[t("div",[e._v(" от "+e._s(_.price_hour)+" ₽/час")]),e._v(" "),t("div",[e._v(" от "+e._s(_.price)+" ₽/мес")])]}},{key:"cell(armed)",fn:function(r){var _=r.item;return[t("div",[e._v("от "+e._s(_.price_hour_with_weapon)+" ₽/час ")]),e._v(" "),t("div",[e._v(" от "+e._s(_.price_with_weapon)+" ₽/мес")])]}}])})],1),e._v(" "),t("div",{staticClass:"type"},[t("h3",[e._v("Стандарт")]),e._v(" "),t("img",{attrs:{src:_(254),alt:"тип_2"}}),e._v(" "),t("p",{staticClass:"text "},[e._v("Сотрудники, со среднем телосложением, имеющие  разряд 5-6, с опытом работы от 3-лет, обучены для выполнения контрольно-пропускного режима и работы с техническими средствами")]),e._v(" "),t("b-table",{staticClass:"text",attrs:{hover:"",items:e.tarrifs.standart,fields:e.fields},scopedSlots:e._u([{key:"cell(mode)",fn:function(r){var _=r.item;return[t("div",{staticClass:"text"},[e._v(e._s(_.name))]),e._v(" "),t("span",{staticClass:"text_descr"},[e._v(e._s(_.descr_name))])]}},{key:"cell(unarmed)",fn:function(r){var _=r.item;return[t("div",[e._v(" от "+e._s(_.price_hour)+" ₽/час")]),e._v(" "),t("div",[e._v(" от "+e._s(_.price)+" ₽/мес")])]}},{key:"cell(armed)",fn:function(r){var _=r.item;return[t("div",[e._v("от "+e._s(_.price_hour_with_weapon)+" ₽/час ")]),e._v(" "),t("div",[e._v(" от "+e._s(_.price_with_weapon)+" ₽/мес")])]}}])})],1),e._v(" "),t("div",{staticClass:"type"},[t("h3",[e._v("Премиум")]),e._v(" "),t("img",{attrs:{src:_(255),alt:"тип_3"}}),e._v(" "),t("p",{staticClass:"text"},[e._v("Сотрудники, строго до 45-лет, крепкого телосложения и презентабельной внешности, имеющие 6-ой разряд, с опытом работы от 5-лет, обучены для выполнения особо сложных задач")]),e._v(" "),t("b-table",{staticClass:"text",attrs:{hover:"",items:e.tarrifs.premium,fields:e.fields},scopedSlots:e._u([{key:"cell(mode)",fn:function(r){var _=r.item;return[t("div",{staticClass:"text"},[e._v(e._s(_.name))]),e._v(" "),t("span",{staticClass:"text_descr"},[e._v(e._s(_.descr_name))])]}},{key:"cell(unarmed)",fn:function(r){var _=r.item;return[t("div",[e._v(" от "+e._s(_.price_hour)+" ₽/час")]),e._v(" "),t("div",[e._v(" от "+e._s(_.price)+" ₽/мес")])]}},{key:"cell(armed)",fn:function(r){var _=r.item;return[t("div",[e._v("от "+e._s(_.price_hour_with_weapon)+" ₽/час ")]),e._v(" "),t("div",[e._v(" от "+e._s(_.price_with_weapon)+" ₽/мес")])]}}])})],1)])])],1)}),[],!1,null,"3fd8900a",null);r.default=component.exports}}]);