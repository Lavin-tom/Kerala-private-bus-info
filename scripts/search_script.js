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
    "ALAPPUZHA": ['ADOOR', 'ADOOR CENTRAL', 'ADOOR PVT STAND', 'ALA', 'ALAPPUZHA', 'ALAPPUZHA JETTY', 'ALAPPUZHA RAILWAY STATION', 'ALPY RAILWAY STATION', 
					'AMRITAPURI', 'ANDHAKARANAZHY', 'ARATTUPUZHA', 'ARATTUVAZHI', 'ARATTUVAZHI VETTACKAL', 'ARATTUVAZHY', 'AROOKUTTY', 'AROOR', 'AROOR CHURCH',
					'AROOR MUKKOM', 'AROOR TEMPLE', 'AROORMUKKAM', 'ARTHUNGAL', 'ARTHUNKAL', 'ASPIN WALL', 'ASPINWALL', 'AYAPARAMBU', 'AYAPARAMBU NORTH', 'AYIRAMTHENGU',
					'AZHEEKKAL', 'AZHEEKKAL CHELLANAM', 'BHARANIKAVU', 'CENTRAL ADOOR', 'CHANGANACHERRY', 'CHANGANASSERY JUNCTION', 'CHANGANASSERY MUKKU',
					'CHANGANASSERY PERUNA BUS ST AND', 'CHARUMMOODU-KL04', 'CHARUMOODU', 'CHAYALODE', 'CHELAPURAM', 'CHELLANAM', 'CHENGANNUR', 'CHENGANNUR RAILWAY STATION',
					'CHERTHALA BUS STAND', 'CHERTHALA RAILWAY STATION', 'CHERUTHANA', 'CHOOLATHERUVU', 'CHOONAD', 'EDACOCHI', 'EDAPALLY JN', 'EDAPALLY RAILWAY STATION',
					'EDAPPON', 'ELAMPALLOOR', 'ERA', 'ERAMALLOOR', 'ERATHODU', 'ERATTAKULANGARA', 'ERNAKULAM', 'ERNAKULAM SOUTH', 'EZHIKKAKATHU JN', 'GENERAL HOSPITAL',
					'HARIPAD', 'HASKAPURAM', 'K V JETTY', 'KADAKKARAPPALLY', 'KAIPPUZHAMUTTU', 'KALAVOOR', 'KALOOR', 'KAMBISSERIMUKKU', 'KANAKAKUNNU', 'KANICHUKULANGARA',
					'KANJIPADAM', 'KANJIPPADAM', 'KANNAMALY', 'KARTHIKAPPALLY', 'KARUNAGAPALLY', 'KARUNAGAPPALLY H S', 'KATTAKKUZHY', 'KATTANAM', 'KATTANAM JN.', 'KAVALA',
					'KAVILPALLY', 'KAVUMBHAGAM', 'KAYAMKULAM PRIVATE BUS STAND', 'KEERIKKADU JETTY', 'KEERUKUZHY', 'KHANDAKARNA TEMPLE', 'KOCHALUMMOODU JN', 'KOCHALUMOODU',
					'KOCHEEDE JETTY', 'KOCHIYUDE JETTI', 'KOLLAKADAVU JN', 'KONNI', 'KOOTTAMKAITHA', 'KOPPARAKKADAVU', 'KOZHANCHERY', 'KOZHENCHERY', 'KOZHUVALLOR', 'KUMBALANGI',
					'KUMBALANGI FERRY', 'KUNDANNOOR', 'KURAKKAVU', 'KURATHIKADU', 'KUTHIATHODE', 'MAHKAMKUZHY', 'MALAYALAPPUZHA', 'MANAPPALLY', 'MANARASALA', 'MANIKANDAN CHIRA',
					'MANIVELIKADAVU', 'MANIVELIKKADAVU', 'MANKAMKUZHY JN', 'MANNADI', 'MANNANCHERRY', 'MANNANCHERY', 'MANNAR', 'MANNARASALA', 'MARARIKKULAM', 'MATHILAKAM',
					'MAVELIKARA', 'MAVELIKKARA', 'MEPPALLIKUTTY JN', 'MUHAMMA', 'MUHAMMA JETTY', 'MUHAMMA JN', 'MUNDUKOTTAKKAL', 'MUTTATHIPARAMBU JUNCTION', 'MUTTOM KYLM',
					'NAGAMKULANGARA', 'NETHAJI', 'NOORNAD', 'OACHIRA', 'OOTTUPARAMBU', 'PAIPPADU', 'PALLITHODE', 'PANDALAM', 'PARAKKODE', 'PARAKKODU', 'PARAKODE', 'PARUMALA',
					'PATHANAMTHITTA', 'PATTOLI MARKET', 'PAVUMBA', 'PERUMBALAM', 'PERUMPALLY', 'PODIYADI', 'POOCHAKKAL', 'POONTHOPPU', 'PREMIER JUNCTION', 'PULAKADAVU',
					'PUNNAMADA', 'PUTHANAMBALAM', 'PUTHANANGADI', 'RAILWAYBUS STAND', 'RAILWAYTERMINAL BUS STAND KYLM', 'S D COLLEGE', 'SASTHAMKOTTA', 'SN KAVALA',
					'SOUTH CHELLANAM', 'THAICKAL', 'THALAVADY', 'THAMARAKULAM', 'THANKI ARATTUVAZHI', 'THANNEERMUKKAM', 'THANNEERMUKKAM SCHOOL JN', 'THAVANAKADAVU',
					'THAVANAKKADAVU', 'THENGANA', 'THEVERY', 'THIRUVALLA', 'THIRUVALLA BUS ST AND', 'THOPPUMPADY', 'THOTTAPALLY', 'THOTTAPPALLY', 'THRICHATTU KULAM',
					'THRIKKUNAPUZHA', 'THRIKKUNNAPUZHA', 'THRIKUNAPUZHA', 'THURAVOOR', 'THYKATTUSSERY JUNCTION', 'THYKKAL', 'THYKKATTUSSERY', 'ULAVAIPPU', 'ULAVAIPU',
					'ULUNTHY', 'VALIYAZHEEKAL TEMPLE', 'VALIYAZHEEKKAL', 'VALLAKALI', 'VALLAKKALI', 'VALYAZHEEKKAL', 'VANDANAM', 'VARANAD TEMPLE', 'VEEYAPURAM', 'VENMONY',
					'VETTACKAL', 'VETTIKODU TEMPLE', 'VYTTILA', 'YMCA ALAPPUZHA'],
	"ERNAKULAM": ['ADICHILI', 'ADIVARAM', 'ADUVASSERY', 'ADUVASSERY JUMA MADJID', 'AIRPORT', 'AIRPORT JUN', 'AKANAD', 'AKAPPARAMBU', 'ALANGAD','ALATTUCHIRA', 'ALINCHUVADU',
					'ALUNKALPOKKAM', 'ALUVA', 'ALUVA BANK JUNCTION', 'ALUVA CIRCULAR', 'ALUVA PRIVATE BUS STAND','AMBALAMUGAL', 'AMEDA TEMPLE JN.', 'AMRUTHA HOSPITAL', 'ANAPPARA',
					'ANAPUZHA KAVALA', 'ANDHAKARANAZHY', 'ANDISSERY TEMPLE', 'ANGAMALY', 'ANGAMALY PRIVATE BUS STATION', 'ANNAMANADA', 'ARAKUNNAM', 'ARANKAVU', 'ARAYANKAVU',
					'AROOKUTTY', 'AROOKUTTY FERRY', 'AROOR', 'AROOR JN', 'AROOR TEMPLE', 'AROOR TOLL JN', 'ASHTAMICHIRA JN', 'ASTER MEDICITY HOSPITAL COCHIN', 'ATHAINI', 'ATHANI',
					'ATTARA', 'AYYAMPUZHA', 'AYYAPPAN KAVU', 'BM COLLEGE', 'BOAT JETTY', 'BOLGATTY JETTY', 'BRAHMAMANGALAM', 'BRAHMAPURAM, KOCHI', 'BTH', 'CEPZ',
					'CHALAKKA JN. N.PARAVUR', 'CHALAKUDY', 'CHALAKUDY SOUTH JN', 'CHANDRAPURA', 'CHAPPA KADAPPURAM', 'CHATHAMMA', 'CHATHAMMA PANANGAD', 'CHATHANAD',
					'CHELLANAM', 'CHEMMANKARI', 'CHEMMAYAM', 'CHEMPU TOLL', 'CHENGAMANAD', 'CHENGAMANAD- ALUVA', 'CHENNUR', 'CHEPPANAM KOCHI', 'CHERAI', 'CHERAI BEACH',
					'CHERAI JUNCTION', 'CHERANALLOOR SIGNAL JN.', 'CHERANELLOOR', 'CHERANELLOOR EDAPPALLY', 'CHERANELLOOR EDAPPLLY', 'CHERANELLOOR SIGNAL', 'CHERIYAKADAV',
					'CHERIYAPALLY', 'CHERIYAPPILLY- N.PARAVUR', 'CHERTHALA', 'CHERTHALA BUS STAND', 'CHERUKARA', 'CHETTIBHAGAM', 'CHETTIBHAGAM VARAPUZHA', 'CHETTIKKAD',
					'CHITTETHUKARA', 'CHITTETHUKARA BUS STOP- KAKKANAD', 'CHITTOOR', 'CHITTOOR FERRY', 'CHITTOOR FERRY- ERNAKULAM', 'CHITTOOR TEMPLE', 'CHITTOOR TEMPLE- ERNAKULAM',
					'CHOONDI JUNCTION', 'CHOTTANIKARA', 'CHOTTANIKKARA', 'CHOTTANIKKARA JN', 'CHOWARA', 'CHOWARA JN. ALUVA', 'CHOWARA NEW RD', 'CHULLY', 'COMPANYPADI', 'CON BEACH',
					'CONVENT BEACH', 'CSEZ', 'CSEZ KAKKANAD', 'CUSAT JUNCTION', 'DESAM JUNCTION-ALUVA', 'DEVASWAMPADAM', 'DON BOSCO JN', 'E KODUNGALOOR', 'EAST APPANGATT',
					'EAST KOVILAKAM', 'EDACHIRA', 'EDACHIRA JN. KAKKANADD', 'EDAKATTUVAYAL', 'EDAKOCHI', 'EDALAKAD', 'EDALAKKAD', 'EDAMPADAM', 'EDAPPALLY', 'EDAPPALLY GATE',
					'EDAPPALLY SIGNAL', 'EDAPPALLY TOLL JUNCTION', 'EDAVANAKKAD', 'EDAVANAKKAD, VYPIN', 'EDAYAR JN.', 'ELAMAKKARA', 'ELAMAKKARA, KOCHI', 'ELAMKUNNAPPUZHA BUS STOP',
					'ELANTHIKARA', 'ELANTHIKKARA', 'ELAPPARA', 'ELAVANTHY', 'ELAVOOR', 'ELAVOOR JN.', 'ELAVOORMARKET', 'ELOOR', 'ELOOR DEPOT', 'ELOOR DEPOT, ERNAKULAM',
					'ELOOR FERRY- ELOOR', 'ELOOR TEMPLE', 'ERAMALLOOR', 'ERAMALLOOR C', 'ERAMALLOOR,', 'ERATTUPETTA', 'ERNAKULAM', 'ERNAKULAM NORTH RAILWAY STATION',
					'ERNAKULAM SOUTH', 'ERNAKULAM SOUTH J UNCTION- CHITTOOR ROAD', 'ERNAKULAM SOUTH JUNCTION- CHITTOOR ROAD', 'EROOR', 'EROOR GATE', 'EROOR JN', 'EZHATTUMUGHAM',
					'EZHIKKARA', 'EZHUPUNNA', 'EZHUPUNNA FERRY', 'FACT', 'FACT CD', 'FISAT', 'FORT KOCHI', 'FORTKOCHI BUS TERMINAL', 'GANDHINAGAR KOCHI', 'GLASS FACTORY',
					'GOTHURUTH', 'GTN', 'GUNDUPARAMBBU BUS STOP- CHELLANAM', 'GURUVAYUR', 'HIGH COURT JUNCTION', 'HINDUSTHAN LIVER', 'HMT COLONY JN.', 'HMT JU',
					'ILLICHODU JUNCTION', 'ILLITHODU', 'INFO-PARK', 'INFOPARK MAIN GATE- KAKKANAD', 'IRUMPANAM', 'IRUMPANAM C', 'JEDGEMUKKU', 'K KOVILAKAM', 'K THURUTHU',
					'KACHERIPADY', 'KADAKKARA', 'KADAMAKKUDY', 'KADAMAKKUDY JN', 'KADAMAKUDY', 'KADANNOTH JN', 'KADAPPARA', 'KADAPPURAM FERRY', 'KADAVANTHRA',
					'KADAVANTHRA CLOCKWISE', 'KADAVANTHRA JN.', 'KADUKUTTY', 'KAIPPUZHAMUTTU', 'KAIPUZHAMUTTU', 'KAITHARAM', 'KAITHARAM.', 'KAKKANAD', 'KAKKANAD PRIVATE BUS STAND',
					'KALACHANDA', 'KALADY', 'KALADY JN. KALADY', 'KALADY PLANTATION', 'KALADY PLANTATION ..', 'KALADY PLANTATION 15 BLOCK', 'KALADY PRIVATE BUS STATION',
					'KALAMASSERY', 'KALAMASSERY HMT JUNCTION', 'KALAMASSERY.', 'KALAMUKKU', 'KALLAYAM', 'KALLUPALAM', 'KALOOR', 'KALOOR PRIVATE BUS STAND', 'KALVATHY FERRY',
					'KANAKKANKADAVU', 'KANAKKANKADAVU- PUTHANVELIKKARA', 'KANAMPURAM', 'KANDAKKADAVU BUS STOP', 'KANDANAD', 'KANINAD', 'KANJIRAMATTOM', 'KANNAMALY',
					'KANNAMALY BUS STOPT', 'KARAMALA', 'KARAMATTOM', 'KARAPARAMBU', 'KARIMUGAL', 'KARIMUGAL KOCHI', 'KARINGAMTHURUTH', 'KARTHEDATHPADY', 'KARUKAPPILLY',
					'KATHRIKADAVU BUS STOP- ERNAKULAM', 'KATTATHRAKADAVU', 'KATTIMUTTAM', 'KATTIPPARAMBU', 'KAVUMTHAZHAM', 'KAYANTHIKARA', 'KEETHOLI', 'KEEZHMAADU',
					'KEEZHMADU ALUVA', 'KINFRA', 'KIZHAKKAMBALAM', 'KIZHAKKAMBALAM JUNCTION', 'KMP BUS STOP', 'KMP NAGAR', 'KOCHI NAVAL AIRPORT,WILLINGDON', 'KOCHU KADAVANTHRA JN.',
					'KODAKARA', 'KODUNGALLORE', 'KODUNGALLUR', 'KODUVAKKAD', 'KOKKUNNU', 'KOLENCHERY', 'KOLLAMKUDIMUGAL', 'KOMBARA', 'KONGORPALLY', 'KONGORPILLY JN. ALUVA',
					'KONGORPPILLY', 'KONTHURUTHY', 'KOONAMMAVU', 'KOONAMMAVU JN.', 'KOOTHATTUKULAM', 'KORATTY', 'KOTHAD', 'KOTHAD CHURCH', 'KOTHAD FERRY',
					'KOTHAD FERRY BUS STOP ERNAKULAM', 'KOTHAVARA', 'KOTTAMAM', 'KOTTAYAM', 'KOTTAYAM BUS STAND', 'KOTTUVALLY', 'KOTTUVALLY SOUTH', 'KOZHIVETTUMVELI',
					'KOZHIVETTUMVELI C', 'KRL', 'KUMBALAM', 'KUMBALAM NORTH', 'KUMBALAM RAILWAY STATION', 'KUMBALANGI', 'KUMBALANGI NORTH', 'KUMBALANGI SOUTH', 'KUMBALANGY FERRY',
					'KUMBALANGY VAZHY JUNCTION', 'KUMBALAPPILLY', 'KUNDANNOOR', 'KUNDANNOOR JUNCTION', 'KUNDANOOR', 'KUNJITHAI', 'KUNNUMPURAM', 'KUNNUMPURAM JN. EDAPPALLY',
					'KURISUMUDY', 'KURUMASSERY', 'MADAVANA', 'MADAVANA JUNCTION', 'MALA', 'MALAVANA FERRY', 'MALAYATTOOR', 'MALIANKARA', 'MALIPPURAM', 'MALIYANKARA', 'MAMBRA',
					'MAMBRA CHURCH', 'MAMBRAKKADAVU', 'MANAKKANKADAVU', 'MANAKKAPADY', 'MANALIMUKKU', 'MANI BAZAR', 'MANIBAZAR- MUNAMBAM', 'MANJ APRA JN.ANGAMALY',
					'MANJ UMMEL KAVALA', 'MANJ UMMEL SIGNAL', 'MANJALY', 'MANJALY- N.PARAVUR', 'MANJANAKAD', 'MANJAPRA', 'MANJAPRA JN.ANGAMALY', 'MANJIKKAD', 'MANJIKKADU',
					'MANJUMMAL', 'MANNAMTHURUTHU', 'MARADU MARKET', 'MARADU V MARKET', 'MARAMPILLY', 'MARAMPILLY BRIDGE', 'MAROTTICHODU', 'MASJID JN', 'MATCH FACTORY',
					'MATTANCHERRY BUS TERMINAL', 'MATTANCHERY', 'MATTAPALLY CHIRA', 'MATTUPURAM', 'MECHERIMUGAL', 'MECKAPPALA', 'MEDICAL COLLEGE', 'MEDICALCOLLEGE',
					'MENAKA- ERNAKULAM', 'METHANAM FERRY', 'MILLINGAL', 'MOOKKANNOOR', 'MOOKKANNOOR- ANGAMALY', 'MOOKKANNOR', 'MOOKKANNUR', 'MOOLAMKUZHI', 'MOOLAMPILLY',
					'MOOLANKUZHY', 'MOOTHAKUNNAM', 'MOOTHAKUNNAM JUNCTION', 'MOOTHEDATHUKAVU', 'MOOZHIKKULAM', 'MULAKULAM', 'MULAMKUZHY', 'MULANTHURUTHY',
					'MULANTHURUTHY PALLITHAZHAM', 'MULANTHURUTHY PALLITHAZHAM JN.', 'MULAVUKAD', 'MULAVUKAD RAILWAY BRIDGE', 'MUNAMBAM', 'MUNDAMVELI', 'MUNNOORPPILLY',
					'MUPPATHADAM INDUSTRIAL JUNCTION', 'MUPPATHADOM', 'MUTTOM', 'N PARAVUR', 'NAD ALUVA', 'NAD QUARTERS', 'NAD THORAPPU', 'NADAKKAVU THRIPUNITHURA',
					'NADUVATTOM', 'NARAKKAL', 'NAVAL AIRPORT', 'NAVEL BASE GAR', 'NAYARAMBALAM', 'NAYATHODE', 'NAYTHODE', 'NECHOORKADAVU', 'NEDUMBASSERY AIR PORT',
					'NEDUMBASSERY AIRPORT', 'NEDUNGAD', 'NEDUVANNUR', 'NEENDAKARA', 'NETTOOR', 'NETTOOR NORTH', 'NILAMPATHINJAMUGAL KAKKANAD', 'NJARAKKAL JUNCTION',
					'NORTH KALAMASSERY', 'NORTH KODUNGALLOOR', 'NORTH PARAVUR', 'NORTH PARAVUR MARKET BUS STOP', 'NORTH PARAVUR MARKET BUSSTOP', 'NUALS COLLEGE',
					'OLIVE MOUNT', 'PADATHIKKARA', 'PALA', 'PALA KOTTARAMATTOM STAND', 'PALARIVATTOM', 'PALARIVATTOM JUNCTION', 'PALISSERY', 'PALLIKKARA', 'PALLIKKARA JUNCTION',
					'PALLILAMKARA', 'PALLIMUKKU', 'PALLITHODE', 'PALLURUTHY NADA BUS STOP', 'PALLURUTHY VELI', 'PAMBAIMOOLA', 'PAMBAIMOOLA JUNCTION', 'PANAMBUKAD',
					'PANAMPILLY NAGAR', 'PANAMPILLY NAGAR,KOCHI,KERALA,INDIA', 'PANANGAD', 'PANANGAD.', 'PANAYIKULAM JN. ALUVA', 'PARAKADAVU ANGAMALY', 'PARAKKAMUGAL',
					'PARAMBAYAM KAPPELA', 'PARAMBISSERY', 'PARAPPURAM', 'PATHALAM', 'PATHALAM ESI JUNCTION', 'PATHALAM IND JN', 'PATTANAM', 'PATTIMATTOM', 'PAVAMKULANGARA',
					'PAZHAMPILLYTHURUTH', 'PEPPATHY', 'PERUMANOOR', 'PERUMANOOR JN', 'PERUMBALAM', 'PERUMBALAM FERRY', 'PERUMBAVOOR', 'PERUMBVAOOR', 'PERUMPADANNA JN.',
					'PERUMPADAPPU', 'PERUMPADAPPU JUNCTION', 'PERUVA', 'PIPE LINE JN. PALARIVATTOM', 'PIRAVOM', 'PIRAVOM PLAZA,PRIVATE BUSSTAND', 'PIZHALAKADAVU',
					'PIZHALAKKADVE C', 'PONEKKARA', 'PONEKKARA AIMS', 'PONEKKARA EDAPPALLY', 'PONKUNNAM BUS STAND', 'POOCHAKKAL', 'POOKKATTUPADY', 'POOTHAMKUTTY',
					'POOTHAMKUTTY AYYAMPUZHA', 'POOTHOTTA', 'POOVAKULAM', 'POOVATHUSSERY', 'POOYAPPILLY', 'POST OFFICE', 'POTTA', 'PREMIER', 'PUKKAD- VYPPIN', 'PUKKADU',
					'PUKKATTUPADY', 'PUKKATTUPADY JN.', 'PULINCHODE SIGNAL JUNCTION', 'PULIYANAM', 'PUNNAKAL', 'PUTHENCRUZ BUS STAND', 'PUTHENVELIKARA', 'PUTHENVELIKKARA',
					'PUTHIYAKAVU', 'PUTHUKKALAVATTAM', 'PUTHUKKALAVATTOM', 'PUTHUPPADY', 'PUTHUVANKUNNU', 'PUTHUVYPPE', 'PUZHAKKAREDATH', 'RAILWAY OVERBRIDGE', 'RAMAMANGALAM',
					'RAVIPURAM', 'S VAZHAKKULAM', 'SANTHINGAR', 'SAUDI SCHOOL JN.', 'SHIPYARD', 'SHIPYARD- ERNAKULAM', 'SNDP JN', 'SOUTH CHITTOOR', 'SREEMOOLA NAGARAM , KALADY',
					'SWARGAM', 'TELK JN. ANGAMALY', 'THADIKKAKADAVU', 'THALAYOLAPARAMBU', 'THAMMANIMATTOM', 'THAQDEES HOSPITAL JN.', 'THATHAPPILLY', 'THAVALAPPARA', 'THETTALY',
					'THEVAKKAL', 'THEVAKKAL THRIKKAKARA', 'THEVARA', 'THEVARA FERRY', 'THEVARA FERRY JUNCTION', 'THEVARA JN', 'THEVARA JUCTION- ERNAKULAM - M G ROAD', 'THIRUTHUR',
					'THIRUVAIRANIKULAM- ALUVA', 'THIRUVANIYOOR', 'THOPPIL JN. EDAPPALLY', 'THOPPUMPADY', 'THOPPUMPADY J UNCTION', 'THOPPUMPADY JUNCTION', 'THOTTUVA',
					'THRIPUNITHURA BUS STAND', 'THURAVOOR', 'THURUTHIPURAM', 'THURUTHOOR', 'THUTHIYOOR', 'THUTHIYOOR KAKKANAD', 'THYKAVU', 'TOLL JN', 'TRIKKANIKKAVU',
					'TRIPUNITHURA', 'TRIPUNITHURA ANTI CLOCKWISE', 'TRIPUNITHURA C', 'TRIPUNITHURA CHOTTANIKKARA', 'TRISSUR', 'ULAVAIPE', 'ULIYANNOOR', 'UNIVERSITY CENTRE',
					'VADAKKUMPURAM', 'VADUTHALA JETTY', 'VAIKOM', 'VALAPPU BUS STOP- VYPPIN', 'VALIAPAZHZAMPILLY', 'VALIYAPARAMBU', 'VALLAM KADAVU', 'VALLAMFERRY', 'VANIAKKAD',
					'VARAPPUZHA', 'VARAPPUZHA PRIVATE BUS STAND', 'VATHURUTHY', 'VATTAPPARA', 'VATTAPPARAMBU', 'VATTEKKADU EKM', 'VAYALKARA', 'VAZHAKKALA',
					'VAZHAKKALA JN.- KAKKANAD', 'VAZHAKKULAM', 'VAZHAMANA', 'VEEGALAND', 'VEGALAND', 'VELLARAPPILLY', 'VELLIKULAM', 'VELLOOR H P C', 'VETTIKKAL',
					'VETTILAPPARA', 'VETTILAPPARA JN', 'VETTITHARA', 'VIMALAGIRI', 'VYNTHALA', 'VYPIN', 'VYPPIN BUS STAND', 'VYTTILA', 'VYTTILA ANTICLOCKWISE',
					'VYTTILA C', 'VYTTILA CLOCKWISE', 'VYTTILA JN.', 'VYTTILA MOBILITY HUB', 'VYTTILA MOBILITYHUB', 'VYTTILA.', 'W KADUNGALLOOR', 'WEST KADUNGALLOOR',
					'WILLINGDON ISLAND', 'WILLINGTON ISLAND KOCHI'],
	"PATHANAMTHITTA": ['ADICHIPUZHA', 'ADOOR BUS STAND', 'ADOOR BUS STAND', 'ADOOR KSRTC BUS STATION', 'ALUMKADAVU', 'AMBALAKADAVU', 'ANANDAPALLY', 'ANCHAL', 'ANGAMOOZHI',
						'ANGAMOOZHY', 'ANICADU', 'ANTHICHANTHA BUS STOP', 'ATHIKKAYAM', 'ATHIRU MKAL', 'ATHUMPUKULAM', 'ATHUMPUMKULAM', 'BHARANICAVU', 'BHARANIKAVU',
						'BHARANIKKAVU JN', 'BHARANIKKAVU,', 'CHAKKUVALLY', 'CHANDANAPPALLY', 'CHANGANASSERY', 'CHARUMMOODU', 'CHATHANKERY', 'CHAVARA', 'CHAVARA BUS STAND',
						'CHENGANNOOR', 'CHENGANNUR', 'CHENGARA', 'CHENGARA CHIRATHITTA', 'CHERIKKAL', 'CHERUTHANA', 'CHINGAVANAM', 'CHITTAR', 'CHITTAR MARKET', 'CHUNKAPPARA',
						'EDAMURI', 'EDAPPON', 'ELAVUMTHITTA', 'ENATHU', 'ERAMALLIKKARA', 'ERAVIPEROOR', 'ERU MELI', 'EZHUMATOOR JN', 'GURUNATHANKAVU TEMPLE', 'GURUNATHANMANNU',
						'HARIPAD', 'ILAMPALLIL HIRANYANALLOOR TEMPLE', 'KACHERITHADOM', 'KADAMMANITTA JN', 'KADAMPANADU JN', 'KADUMEENCHIRA', 'KAIPPATTOOR JN- PT A',
						'KAIRALI JUNCTION', 'KAITHAPARAMBU', 'KALANJOOR TEMPLE', 'KALLELI', 'KALLUMKADAVU', 'KAMUKUMCHERY', 'KANAMUKKU', 'KANJIRAPPALLY', 'KARAKKAL',
						'KARIMANTHODE', 'KARUKACHAL BUS ST AND', 'KARUKACHAL BUS STAND', 'KARUNAGAPPALLY', 'KATTANAM', 'KAVUMBHAGOM JN', 'KAYAMKULAM', 'KAYAMKULAM PRIVATE BUS STAND',
						'KIZHAKKEMAMPARA', 'KIZHAKKUMMURI', 'KIZHAKKUPURAM', 'KOCHIYU JETTY', 'KODUMON', 'KOKKATHODU', 'KOLLAKKADAVU', 'KOLLAM', 'KOLLAM HEAD POST OFFICE JN',
						'KONNI', 'KONNI BUS STAND', 'KONNI JUNCT ION', 'KONNI MEDICAL COLLEGE', 'KOODAL', 'KOTTAMONPARA', 'KOTTAMPARA', 'KOTTANGAL', 'KOTTAYAM',
						'KOTTAYAM BUS STAND', 'KOZHENCHERRY', 'KUDAPPANA', 'KULANGARAVALI', 'KULANGARAVALLEY', 'KULATHUMON', 'KULATHUPUZHA', 'KUMMANNOOR', 'KUNDARA',
						'KUNDARA PALLIMUKKU', 'KUNNAMT HANAM', 'KUNNAMTHANAM', 'KUNNIKODU', 'MALANAD A', 'MALAYALAPPUZHA', 'MALLAPPALLY BUS ST AND', 'MALLAPPALLY BUS STAND',
						'MALLAPPALLY BUS STATION', 'MANAK HOSPITAL', 'MANARCADU', 'MANCODU', 'MANDIRAMPADI', 'MANIMALA', 'MANNADI', 'MANNADISALA', 'MANNAR', 'MANNARATHARA',
						'MANPILAVU', 'MARTHOMA COLLEGE, TIRUVALLA', 'MAVELIKARA', 'MEDAPPARA', 'MEKOZHOOR MARKET', 'MELE KOTTAMONPARA', 'MEPRAL', 'MOT HIRAVAYAL', 'MUKKOOR',
						'MUNDAKAYAM', 'MUNDAPPARA', 'MUTTAPPALLY', 'MUTTAR JN- PANDALAM', 'MUTTAR,', 'NEDUMKUNNAM', 'NELLIMUKAL', 'NIRANAM THOTTADY', 'NJANKADAVU', 'NOORANAD',
						'NOOROMMAVU', 'OACHIRA', 'OLAKETTIYAMBALAM', 'OTHERA', 'PADAM JN', 'PADAPPANAL', 'PAIPPAD', 'PAIPPADU', 'PAMPADY', 'PAMPAVALLEY', 'PANDALAM JUNCT ION',
						'PANDALAM JUNCTION', 'PANDALAM MEDI. MISSION', 'PARUMALA KURISHU BUS STOP', 'PATHANAMT HITTA', 'PATHANAMTHITTA', 'PATHANAMTHITTA PBS', 'PATHANAPURAM',
						'PATTAZHY', 'PAYYANALLOOR TEMPLE', 'PAZHAKULAM JN', 'PERINGANAD MARKET', 'PERINJOTTACKAL', 'PERUNAD', 'PERUNNA BUS STAND', 'POOMKAVU', 'PUNALUR',
						'PUNNALA', 'PUNNALA SHIVA TEMPLE', 'PUNNALA TEMPLE', 'PUTHENCHANTHA', 'PUTHIYAKAVU, AYIROOR', 'PUTHOOR', 'PUTHUKKULAM', 'PUTHUKKULAM JN, MALAYALAPPUZHA',
						'RAJAGIRI SARUMUKKU', 'RANNI', 'RANNY', 'SANKARAMANGALAM', 'SASTHAMKOTTA', 'SEETHATHODE', 'ST. THOMAS COLLEGE, KOZHENCHERRY', 'THADIYOOR', 'THANNITHODE',
						'THANNITHODU', 'THEKKUTHODE', 'THENGAMAM', 'THENGAMAM JN', 'THENGANA', 'THEPPUPARA JN', 'THIRUVALLA', 'THIRUVALLA PVT. BUS ST AND',
						'THIRUVALLA PVT. BUS STAND', 'THIRUVALLA RAILWAY STATION', 'THIRUVANVANDOOR', 'THOOMPAKKULAM', 'THOOMPAKULAM', 'THOTTABHAGO M', 'THOTTABHAGOM',
						'THOTTACKAD', 'THRIKKUNNAPUZHA', 'THULAPPALLY', 'THURAYILKUNNU', 'V KOTTAYAM', 'VADASSERIKKARA', 'VAIPUR', 'VAKAYAR JN', 'VALIYAKAVU', 'VALLIKODE',
						'VATTAMON JUNCTION', 'VAYYATTUPUZHA', 'VECHOOCHIRA', 'VENKOTTA', 'VRINDAVANAM'],				
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
function sortResultsByTime(results) {
    return results.sort((a, b) => {
        // Extract the time part from the departureTime (e.g., "1:00 pm")
        const timeA = a.departureTime.split(' ')[0];
        const timeB = b.departureTime.split(' ')[0];

        // Use localeCompare to properly compare time strings
        return timeA.localeCompare(timeB);
    });
}


function displayResults(results) {
    const table = document.getElementById('resultTable');
    const tbody = table.getElementsByTagName('tbody')[0];

    // Clear existing table body
    tbody.innerHTML = '';

    // Populate table with results
    results.forEach(result => {
        const row = tbody.insertRow();
        const values = [result.vehicleNumber, result.startStation, result.endStation, result.departureTime];

        values.forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
    });
}

async function search() {
    try {
        // Reset the noRouteMessage element
        document.getElementById('noRouteMessage').textContent = '';

        const dropdown1Value = document.getElementById("dropdown1").value;
        const dropdown2Value = document.getElementById("dropdown2").value;
        const dropdown3Value = document.getElementById("dropdown3").value;

        console.log("Searching with values:", dropdown1Value, dropdown2Value, dropdown3Value);

        const jsonFilePath = 'res/' + dropdown1Value.toLowerCase() + '.json';
        const response = await fetch(jsonFilePath);
        console.log('Response status:', response.status);

        const jsonData = await response.json();
        console.log('Fetched JSON data:', jsonData);

        const table = document.getElementById('resultTable');
        const tableBody = table.getElementsByTagName('tbody')[0];
        const tableHead = table.getElementsByTagName('thead')[0];

        tableHead.style.display = 'none';
        tableBody.innerHTML = '';

        // Array to store search results
        const searchResults = [];
        // Declare sortedResults outside the if block
        let sortedResults;

        if (jsonData && jsonData.busSchedules && jsonData.busSchedules.length > 0) {
            let routeFound = false; // Flag to check if any route is found

            jsonData.busSchedules.forEach(schedule => {
                const routeIndex2 = schedule.route.indexOf(dropdown2Value);
                const destinationIndex2 = schedule.route.indexOf(dropdown3Value);

                if (routeIndex2 !== -1 && destinationIndex2 !== -1 && routeIndex2 < destinationIndex2) {
                    // Found a matching route
                    routeFound = true;

                    const selectedTrips = schedule.schedule.filter(trip => {
                        const startIndex = schedule.route.indexOf(dropdown2Value);
                        const endIndex = schedule.route.indexOf(dropdown3Value);
                        const stations = trip.stations;

                        // Check if dropdown2Value is the start station and dropdown3Value is inside the trip
                        return (
                            startIndex !== -1 &&
                            endIndex !== -1 &&
                            endIndex > startIndex &&
                            stations[startIndex].station.trim() === dropdown2Value &&
                            stations[endIndex].station.trim() === dropdown3Value
                        );
                    });

                    selectedTrips.forEach(trip => {
                        const startIndex = schedule.route.indexOf(dropdown2Value);
                        const endIndex = schedule.route.indexOf(dropdown3Value);
                        const stations = trip.stations;

                        // Mark the timings
                        const startStationTime = stations[startIndex].departureTime;
                        const endStationTime = stations[endIndex].departureTime;

                        searchResults.push({
                            vehicleNumber: schedule["Vehicle Number"],
                            startStation: dropdown2Value,
                            endStation: dropdown3Value,
                            startStationTime,
                            endStationTime
                        });
                    });
                }
            });

            if (routeFound) {
                // Sorting the results by time
                sortedResults = sortResultsByTime(searchResults);
                // Displaying the sorted results in the existing table
                displayResults(sortedResults);
            } else {
                // Display a message when no route is found
                document.getElementById('noRouteMessage').textContent = 'No route found for the selected values.';
            }
        } else {
            console.error('Invalid data structure. Expected "busSchedules" property to exist.');
            document.getElementById('noRouteMessage').textContent = 'Invalid data structure. Please try again.';
        }

        if (dropdown2Value === dropdown3Value) {
            // Display a message when both dropdown values are the same
            document.getElementById('noRouteMessage').textContent = 'Please select different values for dropdown2 and dropdown3.';
        }

        console.log('Original Results:', searchResults);
        console.log('Sorted Results:', sortedResults);

    } catch (error) {
        console.error('Error fetching or parsing JSON data:', error);
        document.getElementById('noRouteMessage').textContent = 'Error fetching or parsing data. Please try again.';
    }
}
