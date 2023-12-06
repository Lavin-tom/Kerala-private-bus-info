var options1 = ["Choose District","THIRUVANANTHAPURAM","KOLLAM","PATHANAMTHITTA","ALAPUZHA","KOTTAYAM","IDUKKI","ERNAKULAM","TRISSUR","PALAKKAD","MALAPURAM","KOZHIKODE","WAYANAD","KANNUR","KASARAGOD"];	
var option2 = {};	
var busStations = {	
    "KOTTAYAM": ['116 COLONY ', '14TH MILE ', '504 COLONY ', 'ADICHIPUZHA ', 'ADIVARAM ', 'ADUKKAM ', 'ALUMTHARA ',	
				'AMBALAKAVALA ', 'AMBAYATHODE ', 'AMBEDKAR COLONY ', 'AMBIKA MARKET ', 'ANAKAYAM ', 'ANAKKALLU ',	
				'ANAPPARA ', 'ANCHUKUDIYAR ', 'ANCHUKUDIYAR, BHARANANGANAM ', 'ANGELVALLEY ', 'ANICHUVADU ',	
				'ANJILITHANAM ', 'ANTHIYALAM ', 'ARUNAPURAM ', 'ATHIKKAYAM ', 'ATTIPEEDIKA ', 'ATTUVELIKADAVU ',	
				'AYAMKUDY ', 'AYARKUNNAM ', 'AYMANAM ', 'BELIEVERS CHURCH ', 'BHARANANGANAM ', 'BLOCK ', 'BOLGATTY FERRY ',	
				'BOYCEE ', 'BRAHMAMANGALAM ', 'BUND ROAD ', 'CHAMAKKALA ', 'CHAMAMPATHAL ', 'CHAMPAKARA TEMPLE ',	
				'CHANGANACHERY JETTY ', 'CHANGANASSERY ', 'CHANGANASSERY NEW BUS STAND ', 'CHANGANASSERY OLD BUSTAND ',	
				'CHANGANASSERY, PERUNNA ', 'CHANGANASSERY,(PERUNNA) ', 'CHANJODY ', 'CHANNANIKKAD ', 'CHATHANTHARA ',	
				'CHEEPUNKAL ', 'CHEERANCHIRA ', 'CHEMMANAKARY ', 'CHENAPPADY ', 'CHENGAKKUNNU ', 'CHENGALAM JN ',	
				'CHENGALATHU KAVU ', 'CHENGANNUR ', 'CHENNADU ', 'CHERPUNKAL ', 'CHERTHALA ', 'CHERUPUSHPAM PALLY ',	
				'CHETHIMUKKU ', 'CHETTIMUKKU JN ', 'CHETTUTHODU ', 'CHINGAVANAM ', 'CHIRAKKADAVU ', 'CHITTAR ',	
				'CHOLATHADAM ', 'CHOTTANIKKARA ', 'CHOVOOR ', 'CHUNKAPPARA ', 'COLONY ', 'EDAKADATHY ', 'EDAKKUNNAM ',	
				'EDAMATTOM ', 'EDAMURI ', 'EDAYAZHAM ', 'ELAMKAD TOP ', 'ELAMKADU ', 'ELAMPALLY ', 'ELANJI ',	
				'ELIVALIKKARA ', 'ERATTAYAR JN ', 'ERATTUPETTA ', 'ERATTUPETTA PVT BUS STAND ', 'ERNAKULAM ',	
				'ERNAKULAM KALOOR BUS STAND ', 'ERUMELI ', 'ERUMELY ', 'ESI VADAVATHOOR ', 'ETTUMANOOR ', 'EZHACHERRY ',	
				'EZHUMANTHURUTHU ', 'GURUVAYUR ', 'INCHAKUZHY ', 'IRITTY ', 'IRUMPOONNIKARA ', 'ITTIAPPARA ',	
				'KADAPLAMATTOM ', 'KADAPPOOR ', 'KADATHURUTHY ', 'KADUMOONCHIRA ', 'KADUTHURUTHY ', 'KADUTHURUTHY MARKET ',	
				'KAINADY ', 'KAIPPUZHAMUTTU ', 'KAIPUZHA ', 'KAIPUZHA SASTHANGAL ', 'KAIPUZHAMUTTU ', 'KAKKANAD ', 'KAKKOMBU ',	
				'KALAKOODU ', 'KALATHIPADY ', 'KALAYAKANDAM ', 'KALLAM ', 'KALLAMPARA ', 'KALLARA ', 'KALLINGATHARA ',	
				'KALLUMKATHARA ', 'KALLUNGATHARA CHURCH ', 'KALLUPURACKAL ', 'KANAMALA ', 'KANDAMCHIRA JN ', 'KANDANKAVU ',	
				'KANGAZHA ', 'KANGAZHA HOSPITAL ', 'KANJIRAM JETTY ROAD ', 'KANJIRAMATTOM ', 'KANJIRAPPALLY ',	
				'KANJIRAPPALLY BUS STAND ', 'KANJIRAPPALLY PVT BUS STAND ', 'KAPPADU ', 'KARIMANNOOR ', 'KARIPPOOTHATTU ',	
				'KARIPPUTHATTU ', 'KARIPPUTHATTU BRIDGE ', 'KARIPUTHATTU ', 'KARUKACHAL ', 'KATTAPPANA ',	
				'KATTAPPANA PVT BUS STAND ', 'KAVANALKADAVU ', 'KAVANATTINKARA ', 'KAVUMKANDOM ',	
				'KAYAMKULAM PRIVATE BUS STAND ', 'KAYYUR ', 'KEZHUVANKULAM ', 'KIDANGOOR ',	'KIDANGOOR TEMPLE ', 'KISSUMUM ',	
				'KOCHMATTOM ', 'KOCHUROAD ', 'KODIKUTHY ', 'KODUNGOOR ', 'KOKKAYAR VEMBLY ', 'KOLENCHERY ', 'KOLENCHERY M M HOSPITAL ',	
				'KOLLADU ', 'KOLLADU BOATJETTY JN ', 'KOMBUKUTHY ', 'KONCHUMADA ', 'KOORAMTHOOKKU ', 'KOOROPPADA ', 'KOOTHATTUKULAM ',	
				'KOOTTICKAL ', 'KOOVAPPALLY ', 'KORUTHODU ', 'KOSAMATTOMPADY ', 'KOTTARAMATTOM ', 'KOTTARAMATTOM BUS STAND ', 'KOTTARAMKADA ',	
				'KOTTAYAM ', 'KOTTAYAM BUS STAND ', 'KOZHENCHERRY ', 'KOZHENCHERY ', 'KOZHIKODE ', 'KULATHOORMOOZHY ', 'KUMARAKOM ',	
				'KUMARAKOM BOAT JETTY ', 'KUMARAKOM MARKET JUNCTION ', 'KUMILY JN ', 'KUNINJI ', 'KUNNAMTHANAM ', 'KUNNONNI ', 'KUNNUMPURAM ',	
				'KURAVILANGAD ', 'KURICHY ', 'KURUMBANMOOZHY ', 'KURUMPANMOOZHY ', 'KURUMULLOOR CHURCH ', 'KURUPPANTHARA ', 'KURUPPUMTHARA ',	
				'KUTTISSERIKADAVU ', 'KUZHIMAVU ', 'LAKKATTOOR ', 'MADATHILKAVALA ', 'MALAYALAPPUZHA ', 'MALIKA KADAVU ', 'MALIKAPPADY ',	
				'MALLAPPALLY ', 'MALLAPPALLY BUS STAND ', 'MAMOODU ', 'MANACKACHIRA ', 'MANALELPALLY ', 'MANARCADU CHURCH ', 'MANARCADU JN. ',	
				'MANCOMBU ', 'MANGALAGIR ', 'MANGAPETTA ', 'MANGARAGIRI ', 'MANIMALA ', 'MANIYAPARAMBU ', 'MANJAKUZHY ', 'MANJOOR ',	
				'MANKOMBU TEMPLE ', 'MANNADISALA ', 'MANNAM ', 'MANNAM TEMPLE ', 'MANNANAM ', 'MARAMON JN ', 'MARANGATTUPILLY ',	
				'MARMALA ROAD JN. ', 'MATHAMBA ', 'MATHUNKAL ', 'MATTAKARA ', 'MAVELIKARA ', 'MAVELIKKARA ', 'MCH ', 'MECHAL ',	
				'MED. COLLEGE ', 'MEDICAL COLLEGE BUS STAND ', 'MEDICAL COLLEGE HOSPITAL ', 'MEDICAL COLLGE BUS STAND KOTTAYAM ',	
				'MEENADAM CATTLE MARKET ', 'MELADUKKAM ', 'MELUKAVUMATTAM ', 'MEVIDA ', 'MG UNIVERSITY ', 'MONIPALLY ', 'MOOKKENPETTY ',	
				'MOOLAMATTOM JN ', 'MOOLEDOM ', 'MOOLEPEEDIKA ', 'MOONGAMKUZHY ', 'MOOTHEDATHUKAVU ', 'MOSCOW ', 'MOSCOW JN ', 'MOTHIRAVAYAL ',	
				'MUKKADA JN ', 'MUKKOOR ', 'MUKKOOTTUTHARA ', 'MULAYAMVELI ', 'MUNDAKAYAM ', 'MUNDAKAYAM PVT BUS STNAD ', 'MUNDIAPPALLY ',	
				'MUNDIYAKAL ', 'MUNICIPAL BUS STAND, PALA ', 'MUTTOM BUS STAND ', 'MUTTOM JN ', 'MUVATTUPUZHA ', 'NALAKAVALA ', 'NARAKATHODE ',	
				'NARANAMTHODU ', 'NATTAKOM GUEST HOUSE ', 'NEDUMKUNNAM ', 'NEELOOR ', 'NEENDOOR ', 'NEERIKKAD ', 'NEEZHOOR ', 'NEREKADAV ',	
				'NEREKADAVU FERRY ', 'NJALIYAKUZH ', 'NJALIYAKUZHY ', 'NJANDUKALLU ', 'NJEEZHOOR ', 'ONAMTHUURTHU ', 'PACHIMA ', 'PADUVA ',	
				'PAIKA ', 'PAIPPAD ', 'PAKKANAM ', 'PAKKIL ', 'PAKKILKAVALA ', 'PALA ', 'PALA KOTTARAMATTOM STAND ', 'PALA MUN STAND ',	
				'PALA OLD BUS STAND ', 'PALA PRIVATE BUS STAND ', 'PALA TOWN STAND ', 'PALAAKKAD CHURCH ', 'PALACHUVADU ', 'PALACKATHADOM ',	
				'PALAMATTAM ', 'PALAMKADAVU ', 'PALAPRA TEMPLE ', 'PALLICKATHODU ', 'PALLIKADAVU ', 'PAMPADY ', 'PAMPADY DAYARA ', 'PAMPAVALLY ',	
				'PANACHIKAADU ', 'PANAMATTOM ', 'PANAMBUKADU ', 'PARAMATTOM ', 'PARATHANAM ', 'PARIPPU ', 'PARUTHUMPARA JN ', 'PATHAMPUZHA ',	
				'PATHANADU ', 'PATHANAMTHITTA ', 'PATHINANCHIL CHIRA ', 'PATHINANCHIL KADAVU ', 'PATHINARIL CHIRA ', 'PATHINARILCHIRA ', 'PAYIPPADU JN ',	
				'PAYYAPPADY ', 'PERINGULAM ', 'PERUMPUZHAKADAVU ', 'PERUMTHURUTHU ', 'PERUNNA ', 'PERUNNAD ', 'PERUNNADU ', 'PERUVA ',	
				'PIRAVOM ', 'PLASANAL ', 'PODIMATTOM ', 'PONGAMTHANAM ', 'PONKUNNAM ', 'PONKUNNAM BUS STAND ', 'PONTHENPUZHA ', 'POONJAR ',	
				'POOTHOTTA ', 'POOVANTHURUTHU ', 'POOVASSERY ', 'POOVATHILAPPU ', 'POTTUKULAM ', 'PRAVATTOM ', 'PRAVITHANAM ', 'PULIKKUNNU ',	
				'PULIKUTTISSERY ', 'PULIKUZHY COLONY ', 'PULLARIKUNNU ', 'PUNALUR JN ', 'PUNCHAVAYAL ', 'PUNNAKKAL NIRAVU ', 'PUNNAKKUZHI ',	
				'PUNNATHURA ', 'PUNNAVELI ', 'PUNNILAM BUS STOP ', 'PUTHENPALAM ', 'PUTHENPALLY ', 'PUTHUPALLY ', 'PUTHUPPALLY ', 'RAMAPURAM ',	
				'RANNI ', 'RANNI ,ITTIYAPPARA ', 'S N PURAM ', 'SANTHIPURAM ', 'SASTHANADA ', 'SIVAJINAGAR ', "ST. XAVIER'S COLLEGE, KOTHAVARA, ",	
				'SVR NSS COLLEGE ', 'T V PURAM ', 'TEEKOY ', 'THACHAPUZHA ', 'THALASSERRY ', 'THALASSERY ', 'THALAYOLAPARAMBU ', 'THAMARAKADU JN ',	
				'THAMPALAKAD ', 'THEKKEMAAL ', 'THEKKEMALA ', 'THEMPRAVAL KADAVU ', 'THENGANA ', 'THEVALAKADU ', 'THEVARUPARA ', 'THIDANADU ', 'THIRUVALLA ',	
				'THIRUVANCHOOR ', 'THIRUVARPPU ', 'THIRUVARPPU TEMPLE ', 'THODUPUZHA ', 'THOTTABHAGOM ', 'THOTTACKAD HOSPITAL ', 'THOTTACKADU ', 'THULAPPALLY ',	
				'THUMARAMPARA ', 'TOLL ', 'ULLALA ', 'UMIKUPPA ', 'UMMIKUPPA ', 'UNIVERSITY ', 'UZHAVOOR ', 'VADAKKEMALA ', 'VADASSERIKARA ', 'VADAVATHOOR ',	
				'VADAVATHOOR EAST ', 'VADAVATHOOR ESI ', 'VADAVATHOOR KADAVU ', 'VAIKKOM ', 'VAIKOM ', 'VAIPPUR ', 'VAKKAD ', 'VALLIYAMKAVU ', 'VATTAKKAVU ',	
				'VATTUPURA ', 'VAYALA ', 'VAZHAMANA ', 'VECHOOCHIRA ', 'VECHOOR ', 'VELLANY ', 'VELLAVOOR ', 'VELLOOPARAMBU ', 'VELLOOR ', 'VELLOOR H P C ',	
				'VELLUTHURUTHI TEMPLE ', 'VELOOR ', 'VENGOTTA ', 'VENKOTTA ', 'VETTIMUKAL ', 'VYTTILA HUB ', 'VYTTILA JN. '],	
    "KOLLAM": ["StationX", "StationY", "StationZ"],	
};	
	function loadOptions(selectId, options) {	
    var select = document.getElementById(selectId);	
    select.innerHTML = '';	

    options.forEach(function (option) {	
        var optionElement = document.createElement("option");	
        optionElement.value = option;	
        optionElement.text = option;	
        select.add(optionElement);	
    });	
	}	
	loadOptions("dropdown1", options1);	

	document.getElementById("filterButton").addEventListener("click", function () {	
		var selectedValue = document.getElementById("dropdown1").value;	
		loadDropdown2(selectedValue);	
	});	
	function loadDropdown2(selectedValue) {	
		var options2Array = busStations[selectedValue] || []; 	
		loadOptions("dropdown2", options2Array);	
		loadOptions("dropdown3",options2Array);	
	}	
		async function fetchJsonData(file) {	
			try {	
				const response = await fetch(file);	
				const jsonData = await response.json();	
				return jsonData;	
			} catch (error) {	
				console.error('Error fetching JSON data:', error);	
				throw error;	
			}	
    }
function search() {
    var dropdown1Value = document.getElementById("dropdown1").value;
    var dropdown2Value = document.getElementById("dropdown2").value;
    var dropdown3Value = document.getElementById("dropdown3").value;

    console.log("Searching with values:", dropdown1Value, dropdown2Value, dropdown3Value);


    var jsonFilePath = 'res/' + dropdown1Value.toLowerCase() + '.json';


    fetchJsonData(jsonFilePath)
        .then(data => {
            const allTrips = [];


            if (data.schedule) {

                Object.keys(data.schedule).forEach(tripNumber => {
                    const tripSchedule = data.schedule[tripNumber];
                    const stations = tripSchedule.stations;

                    const routeIndex = stations.findIndex(station => station.station.trim() === dropdown2Value.trim());
                    const destinationIndex = stations.findIndex(station => station.station.trim() === dropdown3Value.trim());

                    if (routeIndex >= 0 && destinationIndex >= 0) {
                        const selectedStations = routeIndex < destinationIndex
                            ? stations.slice(routeIndex, destinationIndex + 1)
                            : stations.slice(destinationIndex, routeIndex + 1).reverse();

                        if (selectedStations.length === Math.abs(routeIndex - destinationIndex) + 1 &&
                            selectedStations[0].station.trim() === dropdown2Value.trim() &&
                            selectedStations[selectedStations.length - 1].station.trim() === dropdown3Value.trim()) {
                            allTrips.push({
                                vehicleNumber: data["Vehicle Number"],
                                tripNumber: tripNumber,
                                departureStation: selectedStations[0].station.trim(),
                                arrivalStation: selectedStations[selectedStations.length - 1].station.trim(),
                                departureTime: selectedStations[0].departureTime,
                            });
                        }
                    }
                });
            } else {
                console.error('Invalid data structure. Expected "schedule" property to exist.');
            }


            allTrips.sort((a, b) => {
                const timeA = new Date(a.departureTime).getTime();
                const timeB = new Date(b.departureTime).getTime();
                return timeA - timeB;
            });

            displayResults(allTrips);

            const resultTable = document.getElementById('resultTable');
            const noRouteMessage = document.getElementById('noRouteMessage');
            if (allTrips.length > 0) {
                resultTable.style.display = 'table';
                noRouteMessage.style.display = 'none';
            } else {
                resultTable.style.display = 'none';
                noRouteMessage.style.display = 'block';
            }
        })
        .catch(error => console.error('Error fetching JSON data:', error));
}
function displayResults(results) {
    const tableBody = document.getElementById('resultTable').getElementsByTagName('tbody')[0];

    tableBody.innerHTML = '';


    results.forEach(result => {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.textContent = result.vehicleNumber;
        cell2.textContent = result.departureStation;
        cell3.textContent = result.arrivalStation;
        cell4.textContent = result.departureTime;
    });
}
