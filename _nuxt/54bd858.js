(window.webpackJsonp=window.webpackJsonp||[]).push([[14,21],{253:function(e,t,r){e.exports=r.p+"img/type_1.01ad3f7.png"},254:function(e,t,r){e.exports=r.p+"img/type_2.6503e41.png"},255:function(e,t,r){e.exports=r.p+"img/type_3.cbe96ae.png"},256:function(e){e.exports=JSON.parse('{"econom":[{"name":"Вахтовый","descr_name":"(12 ч.)","price_hour":130,"price":65000,"price_hour_with_weapon":"150","price_with_weapon":70000},{"name":"Суточный","descr_name":"(2/2)","price_hour":145,"price":85000,"price_hour_with_weapon":165,"price_with_weapon":90000},{"name":"Суточный","descr_name":"(1/2)","price_hour":150,"price":95000,"price_hour_with_weapon":170,"price_with_weapon":100000},{"name":"Дневной (ночной)","descr_name":"(12 ч., пн-вс)","price_hour":140,"price":75000,"price_hour_with_weapon":160,"price_with_weapon":80000},{"name":"Дневной (ночной)","descr_name":"(12 ч., пн-пт)","price_hour":135,"price":70000,"price_hour_with_weapon":155,"price_with_weapon":75000}],"standart":[{"name":"Вахтовый","descr_name":"(12 ч.)","price_hour":140,"price":80000,"price_hour_with_weapon":160,"price_with_weapon":85000},{"name":"Суточный","descr_name":"(2/2)","price_hour":165,"price":105000,"price_hour_with_weapon":185,"price_with_weapon":110000},{"name":"Суточный","descr_name":"(1/2)","price_hour":170,"price":125000,"price_hour_with_weapon":190,"price_with_weapon":130000},{"name":"Дневной (ночной)","descr_name":"(12 часов, пн-вс)","price_hour":145,"price":85000,"price_hour_with_weapon":165,"price_with_weapon":90000},{"name":"Дневной (ночной)","descr_name":"(12 часов, пн-пт)","price_hour":140,"price":75000,"price_hour_with_weapon":160,"price_with_weapon":80000}],"premium":[{"name":"Вахтовый","descr_name":"(12 ч.)","price_hour":145,"price":85000,"price_hour_with_weapon":165,"price_with_weapon":90000},{"name":"Суточный","descr_name":"(2/2)","price_hour":175,"price":120000,"price_hour_with_weapon":195,"price_with_weapon":125000},{"name":"Суточный","descr_name":"(1/2)","price_hour":185,"price":135000,"price_hour_with_weapon":200,"price_with_weapon":140000},{"name":"Дневной (ночной)","descr_name":"(12 ч., пн-вс)","price_hour":165,"price":100000,"price_hour_with_weapon":185,"price_with_weapon":105000},{"name":"Дневной (ночной)","descr_name":"(12 часов, пн-пт)","price_hour":145,"price":85000,"price_hour_with_weapon":165,"price_with_weapon":90000}]}')},257:function(e,t,r){"use strict";r.r(t);var _=r(256),n={name:"tariffs",data:function(){return{name_page:"Тарифы",tarrifs:_,fields:[{label:"Режим",key:"mode"},{label:"Невооруженная",key:"unarmed"},{label:"Вооруженная",key:"armed"}]}}},c=r(37),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"page",attrs:{id:"tariffs"}},[_("b-container",[_("h1",[e._v(e._s(e.name_page))]),e._v(" "),_("div",{staticClass:"flex-container"},[_("div",{staticClass:"type"},[_("h3",[e._v("Эконом")]),e._v(" "),_("img",{attrs:{src:r(253),alt:"тип_1"}}),e._v(" "),_("p",{staticClass:"text "},[e._v("Сотрудники с хорошим телосложением, имеющие  разряд не выше 5-го, с опытом работы от 1 года, обучены для выполнения общенаблюдательных функций и обеспечения пропускного режима")]),e._v(" "),_("b-table",{staticClass:"text",attrs:{hover:"",items:e.tarrifs.econom,fields:e.fields},scopedSlots:e._u([{key:"cell(mode)",fn:function(t){var r=t.item;return[_("div",{staticClass:"text"},[e._v(e._s(r.name))]),e._v(" "),_("span",{staticClass:"text_descr"},[e._v(e._s(r.descr_name))])]}},{key:"cell(unarmed)",fn:function(t){var r=t.item;return[_("div",[e._v(" от "+e._s(r.price_hour)+" ₽/час")]),e._v(" "),_("div",[e._v(" от "+e._s(r.price)+" ₽/мес")])]}},{key:"cell(armed)",fn:function(t){var r=t.item;return[_("div",[e._v("от "+e._s(r.price_hour_with_weapon)+" ₽/час ")]),e._v(" "),_("div",[e._v(" от "+e._s(r.price_with_weapon)+" ₽/мес")])]}}])})],1),e._v(" "),_("div",{staticClass:"type"},[_("h3",[e._v("Стандарт")]),e._v(" "),_("img",{attrs:{src:r(254),alt:"тип_2"}}),e._v(" "),_("p",{staticClass:"text "},[e._v("Сотрудники, со среднем телосложением, имеющие  разряд 5-6, с опытом работы от 3-лет, обучены для выполнения контрольно-пропускного режима и работы с техническими средствами")]),e._v(" "),_("b-table",{staticClass:"text",attrs:{hover:"",items:e.tarrifs.standart,fields:e.fields},scopedSlots:e._u([{key:"cell(mode)",fn:function(t){var r=t.item;return[_("div",{staticClass:"text"},[e._v(e._s(r.name))]),e._v(" "),_("span",{staticClass:"text_descr"},[e._v(e._s(r.descr_name))])]}},{key:"cell(unarmed)",fn:function(t){var r=t.item;return[_("div",[e._v(" от "+e._s(r.price_hour)+" ₽/час")]),e._v(" "),_("div",[e._v(" от "+e._s(r.price)+" ₽/мес")])]}},{key:"cell(armed)",fn:function(t){var r=t.item;return[_("div",[e._v("от "+e._s(r.price_hour_with_weapon)+" ₽/час ")]),e._v(" "),_("div",[e._v(" от "+e._s(r.price_with_weapon)+" ₽/мес")])]}}])})],1),e._v(" "),_("div",{staticClass:"type"},[_("h3",[e._v("Премиум")]),e._v(" "),_("img",{attrs:{src:r(255),alt:"тип_3"}}),e._v(" "),_("p",{staticClass:"text"},[e._v("Сотрудники, строго до 45-лет, крепкого телосложения и презентабельной внешности, имеющие 6-ой разряд, с опытом работы от 5-лет, обучены для выполнения особо сложных задач")]),e._v(" "),_("b-table",{staticClass:"text",attrs:{hover:"",items:e.tarrifs.premium,fields:e.fields},scopedSlots:e._u([{key:"cell(mode)",fn:function(t){var r=t.item;return[_("div",{staticClass:"text"},[e._v(e._s(r.name))]),e._v(" "),_("span",{staticClass:"text_descr"},[e._v(e._s(r.descr_name))])]}},{key:"cell(unarmed)",fn:function(t){var r=t.item;return[_("div",[e._v(" от "+e._s(r.price_hour)+" ₽/час")]),e._v(" "),_("div",[e._v(" от "+e._s(r.price)+" ₽/мес")])]}},{key:"cell(armed)",fn:function(t){var r=t.item;return[_("div",[e._v("от "+e._s(r.price_hour_with_weapon)+" ₽/час ")]),e._v(" "),_("div",[e._v(" от "+e._s(r.price_with_weapon)+" ₽/мес")])]}}])})],1)])])],1)}),[],!1,null,"3fd8900a",null);t.default=component.exports},272:function(e,t,r){e.exports=r.p+"img/bodyguard.322d0e5.jpg"},273:function(e,t,r){e.exports=r.p+"img/child_bodyguard.9aeb016.jpg"},274:function(e,t,r){e.exports=r.p+"img/bodyguard_driver.e23894b.jpg"},304:function(e,t,r){"use strict";r.r(t);var _={name:"bodyguard",components:{Tariffs:r(257).default},data:function(){return{name_page:"Личная охрана",Modes:[{mode:"единовременное сопровождение Клиента на важные переговоры, мероприятия;"},{mode:"ежедневная охрана по установленному графику (по индивидуальной договоренности);"},{mode:"почасовая охрана - присутствие личного охранника на небольшой отрезок времени;"},{mode:"круглосуточная охрана - сопровождение Клиента 24/7."}],TypesBodyguard:[{name:"персональный охранник",descr:"опытный охранник, целью которого стоит постоянная или временная защита жизни и здоровья Клиента;"},{name:"водитель-охранник",descr:"квалифицированный охранник с водительскими правами, который занимается организацией  максимально безопасных маршрутов передвижения для Клиента и обеспечивающий неприкосновенность во время поездки;"},{name:"охрана для детей",descr:"профессиональный охранник со знаниями детской психологии, обеспечивающий безопасность ребенку (детям);"},{name:"vip-охрана",descr:"охрана представительной внешности, занимающаяся безопасностью VIP-персоны."}],DutiesBodyguard:[{duty:"охрана Клиента, личных вещей, автомобиля и гостей;"},{duty:"умение быть незаметными, корректными и вежливыми;"},{duty:"владение всеми приемами обороны и  видами оружия, умение вести точный огонь на поражение;"},{duty:"исследование и проверка мест постоянного пребывания Клиента;"},{duty:"постоянный мониторинг ситуации;"},{duty:"изучение окружения Клиента;"},{duty:"сопровождение Клиента на мероприятия/работу/деловые встречи и в иные организации;"},{duty:"своевременное устранение потенциальных угроз (выявление подслушивающих и взрывных устройств, блокировка мест, где готовится покушение и т.д.);"},{duty:"сопровождение во время пеших передвижениях и автосопровождение;"},{duty:"незамедлительная реакция во время нештатных ситуаций."}]}}},n=r(37),component=Object(n.a)(_,(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"page services",attrs:{id:"bodyguard"}},[_("b-container",[_("h1",[e._v(e._s(e.name_page))]),e._v(" "),_("img",{staticClass:"first_img",attrs:{src:r(272),alt:"личная_охрана"}}),e._v(" "),_("p",{staticClass:"text"},[_("span",{staticClass:"emphasized"},[e._v("Личная охрана")]),e._v(" - профессиональная охрана, обеспечивающая безопасность жизни и здоровья Клиента и конфиденциальность информации. Охранники личной охраны настоящие профессионалы своего дела, прошедшие полную систему подготовки и жесткий отбор до собеседования с клиентом.")]),e._v(" "),_("h6",{staticClass:"noclear"},[e._v("Режимы работы личной охраны:")]),e._v(" "),_("ul",{staticClass:"text"},e._l(e.Modes,(function(t){return _("li",{key:t.index},[e._v(e._s(t.mode))])})),0),e._v(" "),_("h6",[e._v("Разновидности личной охраны:")]),e._v(" "),_("img",{staticClass:"second_img",attrs:{src:r(273),alt:"личная_охрана_детей"}}),e._v(" "),_("ul",{staticClass:"text varieties"},e._l(e.TypesBodyguard,(function(t){return _("li",{key:t.index},[_("b",[e._v(e._s(t.name))]),e._v(" - "+e._s(t.descr))])})),0),e._v(" "),_("img",{staticClass:"third_img",attrs:{src:r(274),alt:"личная_охрана_водитель"}}),e._v(" "),_("h6",{staticClass:"noclear"},[e._v("Обязанности личной охраны:")]),e._v(" "),_("ul",{staticClass:"text"},e._l(e.DutiesBodyguard,(function(t){return _("li",{key:t.index},[e._v(e._s(t.duty))])})),0),e._v(" "),_("Tariffs")],1)],1)}),[],!1,null,"4d4ef966",null);t.default=component.exports}}]);