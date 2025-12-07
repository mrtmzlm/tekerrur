// =================================================================
// KPSS TARİH - BÜYÜK VERİ TABANI
// =================================================================
const database = {
    "islamiyet_oncesi": [
        { word: "İslamiyet öncesi Türklerde 'Devlet'e ne ad verilir?", meaning: "İl (El)" },
        { word: "Gök Tanrı tarafından hükümdara verildiğine inanılan yönetme yetkisi?", meaning: "Kut" },
        { word: "Hükümdarın yetkilerini kısıtlayabilen tek güç?", meaning: "Töre (Hukuk Kuralları)" },
        { word: "Devlet işlerinin görüşüldüğü meclise verilen isimler?", meaning: "Toy / Kurultay / Kengeş" },
        { word: "Hükümet (Bakanlar Kurulu) kavramının karşılığı nedir?", meaning: "Ayuki" },
        { word: "Hükümet başkanı (Başbakan / Vezir) kavramının karşılığı nedir?", meaning: "Aygucı (Üge)" },
        { word: "Hükümdarın erkek çocuklarına ne ad verilir?", meaning: "Tigin" },
        { word: "Tiginlerin eğitiminden sorumlu hocalara ne ad verilir?", meaning: "Ataman (İnal / İnanç)" },
        { word: "Kurultay'a katılma hakkı olan üyelere ne ad verilir?", meaning: "Toygun" },
        { word: "Saray görevlisi veya yazışmalardan sorumlu katip?", meaning: "Bitikçi (Tamgacı)" },
        { word: "Sosyal yapının en küçük birimi olan 'Aile'ye ne denir?", meaning: "Oguş" },
        { word: "Sülalelerin birleşmesiyle oluşan 'Boy'a ne denir?", meaning: "Bod (Ok)" },
        { word: "Milletin birleşmesiyle oluşan en üst yapı (Devlet)?", meaning: "İl (El)" },
        { word: "Mezarın başına dikilen ve öldürdüğü düşman sayısını simgeleyen taşlara ne ad verilir?", meaning: "Balbal" },
        { word: "Üzerinde uzun yazıtlar bulunan anıt mezar taşlarına ne ad verilir?", meaning: "Bengütaş (Anıt Taş)" },
        { word: "Cenaze törenlerine ne ad verilir?", meaning: "Yuğ" },
        { word: "Din adamlarına verilen isimler?", meaning: "Kam / Baksı / Şaman" },
        { word: "İslamiyet öncesi sözlü edebiyat ürünü olan 'Atasözü'ne ne denir?", meaning: "Sav" },
        { word: "İslamiyet öncesi sözlü edebiyatta 'ağıt'a ne ad verilir?", meaning: "Sagu" },
        { word: "Kopuz eşliğinde söylenen şiirlere ne denir?", meaning: "Koşuk" },
        { word: "Türk tarihinin ilk yazılı edebi eserleri?", meaning: "Orhun Abideleri (Göktürk Yazıtları)" },
        { word: "Orhun Yazıtları'nı yazıya geçiren bilgin kimdir?", meaning: "Yollug Tigin" },
        { word: "Türk adının anlamı Çin kaynaklarında nasıl geçer?", meaning: "Miğfer" },
        { word: "Türk adının anlamı Ziya Gökalp'e göre nedir?", meaning: "Töreli (Kanun / nizam sahibi)" },
        { word: "Türk adını devlet adı olarak ilk kullanan Türk devleti?", meaning: "Göktürkler" },
        { word: "Türklerde parayı değişim aracı olarak kullanan ilk Türk devleti?", meaning: "Göktürkler" },
        { word: "Kendi adına para bastıran ilk Türk hükümdarı?", meaning: "Baga Tarkan (Türgişler)" },
        { word: "İlk Türk alfabesi hangisidir?", meaning: "Göktürk (Orhun) Alfabesi" },
        { word: "Türklerin kullandığı ikinci alfabe hangisidir?", meaning: "Uygur Alfabesi" },
        { word: "Türklerin kullandığı ilk takvim hangisidir?", meaning: "12 Hayvanlı Türk Takvimi" },
        { word: "Museviliği kabul eden ilk ve tek Türk devleti?", meaning: "Hazarlar" },
        { word: "İslamiyet'i kabul eden ilk Türk boyu?", meaning: "Karluklar" },
        { word: "Yerleşik hayata geçen ilk Türk devleti?", meaning: "Uygurlar" },
        { word: "Türk tarihinde din değiştiren (Maniheizm ve Budizm gibi) ilk Türk devleti?", meaning: "Uygurlar" }
    ],
    "turk_islam": [
        { word: "Orta Asya'da kurulan ilk Müslüman Türk devleti?", meaning: "Karahanlılar" },
        { word: "İslamiyet'i kabul eden ilk Türk boyu?", meaning: "Karluklar" },
        { word: "Mısır'da kurulan ilk Türk-İslam devleti?", meaning: "Tolunoğulları" },
        { word: "Kutsal topraklara (Hicaz) hakim olan ilk Türk devleti?", meaning: "İhşidiler (Akşitler)" },
        { word: "Eyyubilerin kurucusu kimdir?", meaning: "Selahaddin Eyyubi" },
        { word: "Dünya tarihinde 'Sultan' unvanını kullanan ilk hükümdar?", meaning: "Gazneli Mahmut" },
        { word: "Gazneli Mahmut’un Abbasi Halifesi tarafından aldığı unvan?", meaning: "Sultan" },
        { word: "Gazneliler ile Büyük Selçuklular arasındaki mücadeleyi sonlandıran savaş?", meaning: "Dandanakan Savaşı (1040)" },
        { word: "Anadolu'nun kapılarını Türklere açan savaş?", meaning: "Malazgirt Savaşı (1071)" },
        { word: "Büyük Selçuklu'nun yıkılmasına neden olan savaş?", meaning: "Katvan Savaşı (1141)" },
        { word: "Selçuklularda devlet işlerinin görüşüldüğü meclise verilen ad?", meaning: "Divan-ı Saltanat" },
        { word: "Selçuklularda hükümdar naibi (Vekil-i hass) kimdir?", meaning: "Atabey" },
        { word: "Selçuklularda askerlerin başkomutanı?", meaning: "Emir-ül Ümera" },
        { word: "Selçuklularda şehir yöneticisine verilen ad?", meaning: "Amid" },
        { word: "Selçuklularda vergi toplayan görevli?", meaning: "Amil" },
        { word: "Savaş esiri çocukların yetiştirilip asker yapıldığı sistem?", meaning: "Gulam Sistemi" },
        { word: "Toprağın geliriyle memur ve asker maaşlarının ödendiği sistem?", meaning: "İkta Sistemi" },
        { word: "İkta sistemi ile yetişen askerlere ne denir?", meaning: "Sipahi (Cebelü)" },
        { word: "Kudüs'ü Haçlılardan geri alan (Hıttin Savaşı) devlet?", meaning: "Eyyubiler" },
        { word: "Moğolları dünya tarihinde ilk kez durduran devlet?", meaning: "Memlükler (Ayn Calut Savaşı)" },
        { word: "Veraset sistemini değiştirip 'Her emirin sultan olma hakkı vardır' diyen devlet?", meaning: "Memlükler" },
        { word: "Türk-Arap ilişkilerini etkileyen ve Türklerin Müslüman olmasında rol oynayan savaş?", meaning: "Talas Savaşı (751)" },
        { word: "Oğuzların Müslüman olmasında etkili olan boy?", meaning: "Karluklar" },
        { word: "Türk-İslam mimarisinin ilk örneklerinin görüldüğü devlet?", meaning: "Karahanlılar" },
        { word: "İslami dönem Türk edebiyatının İLK eseri?", meaning: "Kutadgu Bilig (Yusuf Has Hacip)" },
        { word: "İlk Türk-İslam dünya haritasını çizen bilgin?", meaning: "Kaşgarlı Mahmut" },
        { word: "Türkçenin Arapçadan zengin olduğunu göstermek için yazılan sözlük?", meaning: "Divan-ı Lügati't Türk (Kaşgarlı Mahmut)" },
        { word: "Nizamiye Medreselerini kuran devlet yöneticisi?", meaning: "Tuğrul – Alp Arslan – Melikşah dönemleri (Büyük Selçuklu)" },
        { word: "Nizamiye medreselerinin kuruluş amacı?", meaning: "Devlet adamı ve alim yetiştirmek, Şii propagandasını engellemek" },
        { word: "Muallim-i Sani (İkinci Öğretmen) olarak bilinen bilgin?", meaning: "Farabi" },
        { word: "Avrupalıların 'Avicenna' dediği, Tıbbın Hükümdarı?", meaning: "İbn-i Sina" },
        { word: "Cebir ilminin kurucusu ve '0' rakamını kullanan bilgin?", meaning: "Harezmi" },
        { word: "Sosyoloji ve tarih felsefesinin kurucusu kabul edilen bilgin?", meaning: "İbn-i Haldun" },
        { word: "“Medinetü’l Fazıla” (Erdemliler Şehri) adlı eserin yazarı?", meaning: "Farabi" },
        { word: "Optik biliminin öncüsü, 'Kitab-ül Menazır'ı yazan bilgin?", meaning: "İbn-i Heysem" }
    ],
    "osmanli_kultur": [
        { word: "Osmanlı'da devlet işlerinin görüşüldüğü en yüksek kurul?", meaning: "Divan-ı Hümayun" },
        { word: "Divan-ı Hümayun'un doğal başkanı kimdir?", meaning: "Padişah" },
        { word: "Divan’a padişah yerine başkanlık eden mutlak vekil?", meaning: "Sadrazam (Vezir-i Azam)" },
        { word: "Tuğra çeken, yazışmaları düzenleyen ve tımar kayıtlarını tutan görevli?", meaning: "Nişancı" },
        { word: "Şer’i hukuk ve eğitim işlerinden sorumlu divan üyesi?", meaning: "Kazasker" },
        { word: "Mali işlerden sorumlu, bütçeyi hazırlayan divan üyesi?", meaning: "Defterdar" },
        { word: "Padişahın özel mektuplarını yazan ve elçilik işlerine bakan memur?", meaning: "Reisülküttab" },
        { word: "Şehzadelerin sancağa çıkma usulünün kaldırılıp sarayda kapalı tutulması?", meaning: "Kafes Usulü" },
        { word: "Osmanlı'da 'en yaşlı ve olgun' hanedan üyesinin tahta çıkması sistemi?", meaning: "Ekber ve Erşed Sistemi" },
        { word: "Devletin resmi kayıtlarının toplandığı arşiv bölümü?", meaning: "Defterhane" },
        { word: "Sarayın dış hizmetlerinden sorumlu kısım?", meaning: "Birun" },
        { word: "Sarayın iç hizmetlerinden sorumlu bölüm?", meaning: "Enderun" },
        { word: "Enderun'da devlet adamı yetiştirilmesi sistemi?", meaning: "Devşirme Sistemi" },
        { word: "Geliri memur ve askerlere maaş karşılığı verilen toprak sistemi?", meaning: "Dirlik (Tımar)" },
        { word: "Tımar sistemine bağlı olarak yetişen askerler?", meaning: "Tımarlı Sipahi" },
        { word: "Devşirme kökenli askerlerin 3 ayda bir aldığı maaş?", meaning: "Ulufe" },
        { word: "Padişah değişince askerlere verilen bahşiş?", meaning: "Cülus Bahşişi" },
        { word: "Yeniçeri Ocağı'nın kaldırılması olayı?", meaning: "Vaka-i Hayriye" },
        { word: "Esnaf ve zanaatkarların oluşturduğu teşkilat?", meaning: "Lonca Teşkilatı" },
        { word: "Lonca'da dükkân açma izni/ruhsatı?", meaning: "Gedik" },
        { word: "Devletin mallara fiyat belirlemesi (fiyat denetimi)?", meaning: "Narh Sistemi" },
        { word: "Olağanüstü durumlarda halktan toplanan vergi?", meaning: "Avarız" },
        { word: "Gayrimüslimlerin askerlik yapmamak için ödediği vergi?", meaning: "Cizye" },
        { word: "Toprağı işlemeyenden alınan vergi?", meaning: "Çiftbozan" },
        { word: "Ürün üzerinden alınan vergi?", meaning: "Öşür (Müslüman) / Haraç (Gayrimüslim)" },
        { word: "İç borçlanma senetlerine verilen ad?", meaning: "Esham" },
        { word: "Devletin suçu kanıtlanan memurun malına el koyması sistemi?", meaning: "Müsadere" },
        { word: "Osmanlı’da şer’i hukukun baş uygulayıcısı kimdir?", meaning: "Kadılar" },
        { word: "Devletin adalet işlerinden sorumlu divan üyesi?", meaning: "Kazasker" },
        { word: "Osmanlı'nın ilk müderrisi (İlk profesör)?", meaning: "Davud-u Kayseri" },
        { word: "Enderun’da en yetenekli öğrencilerin yetiştirildiği son eğitim bölümü?", meaning: "Has Oda" },
        { word: "Osmanlı’da açılan ilk medrese?", meaning: "İznik Medresesi" },
        { word: "Roketle ilk uçuş denemesini yapan mucit?", meaning: "Lagari Hasan Çelebi" },
        { word: "Deniz üzerine uçma denemesi yapan Osmanlı bilgini?", meaning: "Hezarfen Ahmed Çelebi" },
        { word: "Dünya haritasını çizen ünlü denizci?", meaning: "Piri Reis" },
        { word: "Piri Reis’in ünlü coğrafya eseri?", meaning: "Kitab-ı Bahriye" },
        { word: "Mimar Sinan'ın 'Ustalık' eseri?", meaning: "Selimiye Camii" },
        { word: "Mimar Sinan’ın “Çıraklık” eseri?", meaning: "Şehzade Camii" },
        { word: "Mimar Sinan’ın “Kalfalık” eseri?", meaning: "Süleymaniye Camii" },
        { word: "Türk müziğinin en büyük bestekarı (Tuti-i Mucize)?", meaning: "Itri" },
        { word: "Minyatür sanatçısına Osmanlı'da ne denir?", meaning: "Nakkaş" },
        { word: "Osmanlı’da tarih yazıcılarına ne denir?", meaning: "Vakanüvis" }
    ],
    "osmanli_siyasi": [
        { word: "Osmanlı ile Bizans arasında yapılan ilk savaş (Osman Bey)?", meaning: "Koyunhisar (Bafeus) Savaşı" },
        { word: "Bursa'nın fethedilip başkent yapıldığı dönem?", meaning: "Orhan Bey" },
        { word: "Osmanlı'nın Rumeli'ye geçtiği ilk toprak parçası?", meaning: "Çimpe Kalesi" },
        { word: "İlk Osmanlı-Haçlı savaşı?", meaning: "Sırpsındığı Savaşı" },
        { word: "I. Murat'ın şehit düştüğü ve ilk kez top kullanılan savaş?", meaning: "I. Kosova Savaşı" },
        { word: "Yıldırım Bayezid'in Haçlıları bozguna uğrattığı ve 'Sultan-ı İklimi Rum' unvanını aldığı savaş?", meaning: "Niğbolu Savaşı" },
        { word: "Timur ile Yıldırım Bayezid arasında yapılan ve Fetret Devri'ni başlatan savaş?", meaning: "Ankara Savaşı (1402)" },
        { word: "Osmanlı'nın ikinci kurucusu sayılan padişah?", meaning: "I. Mehmet (Çelebi)" },
        { word: "II. Murat'ın Haçlılara karşı kesin zafer kazandığı savaş?", meaning: "Varna Savaşı (1444)" },
        { word: "Osmanlı'nın Balkanlardaki hakimiyetini kesinleştiren savaş?", meaning: "II. Kosova Savaşı" },
        { word: "İstanbul'un Fethi ile sona eren çağ?", meaning: "Orta Çağ" },
        { word: "Fatih Sultan Mehmet'in Akkoyunlu hükümdarı Uzun Hasan'ı yendiği savaş?", meaning: "Otlukbeli Savaşı" },
        { word: "Kırım'ın fethiyle (Fatih Dönemi) ne gerçekleşmiştir?", meaning: "Karadeniz Türk gölü haline geldi." },
        { word: "Anadolu Türk siyasi birliğinin kesin olarak sağlandığı savaş?", meaning: "Turnadağ Savaşı (1515)" },
        { word: "Yavuz Sultan Selim'in Safevileri (Şah İsmail) yendiği savaş?", meaning: "Çaldıran Savaşı" },
        { word: "Memlüklerin yıkıldığı ve Halifeliğin Osmanlı'ya geçtiği savaşlar?", meaning: "Mercidabık ve Ridaniye" },
        { word: "Dünya tarihinin en kısa süren (2 saat) meydan muharebesi?", meaning: "Mohaç Meydan Muharebesi (Kanuni)" },
        { word: "Akdeniz'in Türk gölü haline gelmesini sağlayan zafer?", meaning: "Preveze Deniz Zaferi" },
        { word: "İlk Osmanlı-İran resmi antlaşması?", meaning: "Amasya Antlaşması (Kanuni)" },
        { word: "Haçlıların Osmanlı donanmasını ilk kez yaktığı olay (Kıbrıs'ın fethinden sonra)?", meaning: "İnebahtı Deniz Bozgunu" },
        { word: "Sadrazam Sokullu Mehmet Paşa'nın ölümüyle sona eren dönem?", meaning: "Yükselme Dönemi" },
        { word: "Osmanlı'nın doğuda en geniş sınırlara ulaştığı antlaşma?", meaning: "Ferhat Paşa Antlaşması" },
        { word: "Avusturya arşidükünün Osmanlı padişahına denk sayılacağı antlaşma?", meaning: "Zitvatorok Antlaşması" },
        { word: "Günümüz Türkiye-İran sınırını büyük ölçüde çizen antlaşma?", meaning: "Kasr-ı Şirin Antlaşması" },
        { word: "Osmanlı'nın batıda en geniş sınırlara ulaştığı antlaşma?", meaning: "Bucaş Antlaşması" },
        { word: "Osmanlı ordusunun 24 yılda alabildiği ada?", meaning: "Girit Adası" },
        { word: "Osmanlı'nın batıda taarruzdan savunmaya geçtiği büyük bozgun?", meaning: "II. Viyana Kuşatması (1683)" },
        { word: "Osmanlı'nın batıda büyük çapta toprak kaybettiği ilk antlaşma (Gerileme Başlangıcı)?", meaning: "Karlofça Antlaşması" },
        { word: "Rusya'nın Karadeniz'e inme fırsatı bulduğu antlaşma?", meaning: "İstanbul Antlaşması (1700)" },
        { word: "Rusya'ya verilen Azak Kalesi'nin geri alındığı antlaşma?", meaning: "Prut Antlaşması" },
        { word: "Batının üstünlüğünün kabul edildiği ve Lale Devri'nin başladığı antlaşma?", meaning: "Pasarofça Antlaşması" },
        { word: "Osmanlı'nın 18. yüzyılda imzaladığı son kazançlı antlaşma?", meaning: "Belgrad Antlaşması" },
        { word: "Rus donanmasının Osmanlı donanmasını yaktığı ilk olay (1770)?", meaning: "Çeşme Baskını" },
        { word: "Kırım'ın bağımsız olduğu antlaşma?", meaning: "Küçük Kaynarca Antlaşması" },
        { word: "Kırım'ın Rusya'ya ait olduğunun resmen kabul edildiği antlaşma?", meaning: "Yaş Antlaşması" },
        { word: "Sırpların ilk kez ayrıcalık kazandığı antlaşma?", meaning: "Bükreş Antlaşması (1812)" },
        { word: "Yunanlıların bağımsızlığını kazandığı antlaşma?", meaning: "Edirne Antlaşması (1829)" },
        { word: "Rusya ve İngiltere/Fransa'nın Osmanlı donanmasını yaktığı olay (Yunan isyanı sırasında)?", meaning: "Navarin Olayı (1827)" },
        { word: "Mısır Valisi Kavalalı Mehmet Ali Paşa isyanı sonucu Rusya ile imzalanan antlaşma?", meaning: "Hünkar İskelesi Antlaşması (1833)" },
        { word: "Boğazlar sorununun uluslararası statü kazandığı sözleşme?", meaning: "Londra Boğazlar Sözleşmesi (1841)" },
        { word: "Osmanlı ekonomisinin dışa bağımlı hale geldiği ticaret antlaşması?", meaning: "Balta Limanı Antlaşması (1838)" },
        { word: "Osmanlı'nın ilk kez Avrupa devleti sayıldığı antlaşma?", meaning: "Paris Antlaşması (1856)" },
        { word: "Rus donanmasının Osmanlı donanmasını yaktığı üçüncü olay?", meaning: "Sinop Baskını (1853)" },
        { word: "Ermeni sorununun uluslararası alanda ilk kez yer aldığı antlaşma?", meaning: "Berlin Antlaşması (1878)" },
        { word: "Kıbrıs'ın yönetiminin geçici olarak İngiltere'ye bırakılmasına yol açan gizli antlaşma?", meaning: "Kıbrıs Antlaşması (1878)" },
        { word: "Osmanlı Devleti'nde meclisin yeniden açılmasıyla başlayan dönem?", meaning: "II. Meşrutiyet (1908)" },
        { word: "Mustafa Kemal'in tarih sahnesine çıktığı ilk olay?", meaning: "31 Mart Olayı (1909)" },
        { word: "Kuzey Afrika'daki son toprak parçasının kaybedildiği antlaşma?", meaning: "Uşi Antlaşması (1912)" },
        { word: "I. Balkan Savaşı'nda en karlı çıkan devlet?", meaning: "Bulgaristan" },
        { word: "Osmanlı Devleti'nin imzaladığı en ağır barış antlaşması?", meaning: "Sevr Antlaşması (1920)" },
        { word: "Osmanlı'nın I. Dünya Savaşı'ndan çekildiği ateşkes?", meaning: "Mondros Ateşkes Antlaşması" },
        { word: "Osmanlı Devleti'nin hukuken sona ermesine yol açan gelişme?", meaning: "Saltanatın kaldırılması (1 Kasım 1922)" }
    ],
    "islahat_17": [
        { word: "Saray dışından evlenerek saray kadınlarının yönetimdeki etkinliğini kıran ilk padişah?", meaning: "II. Osman (Genç Osman) (17. YY)" },
        { word: "Şeyhülislamın yetkilerini kısıtlayan ilk padişah?", meaning: "II. Osman (Genç Osman) (17. YY)" },
        { word: "Başkenti İstanbul'dan Anadolu'ya taşımayı düşünen padişah?", meaning: "II. Osman (Genç Osman) (17. YY)" },
        { word: "Yeniçeri Ocağı'nı kaldırmayı düşünen ilk padişah?", meaning: "II. Osman (Genç Osman) (17. YY)" },
        { word: "İçki, tütün yasağı getiren ve gece sokağa çıkma yasağı uygulayan padişah?", meaning: "IV. Murat (17. YY)" },
        { word: "Koçi Bey ve Katip Çelebi'ye devletin gidişatı hakkında risale hazırlatan padişah?", meaning: "IV. Murat (17. YY)" },
        { word: "İlk kez modern anlamda 'Denk Bütçe' çalışmasını yapan devlet adamı?", meaning: "Tarhuncu Ahmet Paşa (17. YY)" },
        { word: "Sadrazamlık teklifini 'şartlar sunarak' kabul eden ilk devlet adamı?", meaning: "Köprülü Mehmet Paşa (17. YY)" }
    ],
    "islahat_18": [
        { word: "Lale Devri'nin (1718-1730) padişahı kimdir?", meaning: "III. Ahmet (18. YY)" },
        { word: "Avrupa'dan getirilen ilk çiçek aşısı hangi padişah döneminde uygulandı?", meaning: "III. Ahmet (18. YY)" },
        { word: "İlk Türk matbaası (İbrahim Müteferrika) kimin döneminde kuruldu?", meaning: "III. Ahmet (18. YY)" },
        { word: "İtfaiye teşkilatının temeli sayılan 'Tulumbacılar Ocağı'nı kurduran padişah?", meaning: "III. Ahmet (18. YY)" },
        { word: "Yalova'da ilk kağıt imalathanesinin açıldığı padişah dönemi?", meaning: "I. Mahmut (18. YY)" },
        { word: "Avrupa'yı örnek alarak askeri ıslahat yapan ilk padişah?", meaning: "I. Mahmut (18. YY)" },
        { word: "Batı tarzında açılan ilk teknik okul 'Hendesehane' kimin döneminde açıldı?", meaning: "I. Mahmut (18. YY)" },
        { word: "Humbaracı Ocağı'nı ıslah eden ve Comte de Bonneval'i getiren padişah?", meaning: "I. Mahmut (18. YY)" },
        { word: "Sürat Topçuları Ocağı'nı kuran padişah?", meaning: "III. Mustafa (18. YY)" },
        { word: "'Esham Sistemi'ni (İç Borçlanma) hazırlayan (ancak uygulayamayan) padişah?", meaning: "III. Mustafa (18. YY)" },
        { word: "'Esham Sistemi'ni uygulamaya koyan padişah?", meaning: "I. Abdülhamit (18. YY)" },
        { word: "Mühendishane-i Bahrî-i Hümâyun (ilk deniz mühendislik okulu) hangi padişah döneminde açıldı?", meaning: "III. Mustafa (18. YY)" },
        { word: "Mühendishane-i Berrî-i Hümâyun (kara mühendislik okulu) kimin döneminde açıldı?", meaning: "III. Selim (18. YY)" },
        { word: "Yeniçeri sayımını yapan ve Culus bahşişini kaldıran padişah?", meaning: "I. Abdülhamit (18. YY)" },
        { word: "Ulufe alım satımını yasaklayan padişah?", meaning: "I. Abdülhamit (18. YY)" },
        { word: "Nizam-ı Cedid ordusunu kuran padişah?", meaning: "III. Selim (18. YY)" },
        { word: "Nizam-ı Cedid ordusunun masraflarını karşılamak üzere kurulan hazine?", meaning: "İrad-ı Cedid (18. YY)" },
        { word: "İlk devlet matbaası (Matbaa-i Amire) kimin döneminde kuruldu?", meaning: "III. Selim (18. YY)" },
        { word: "Avrupa başkentlerinde (Londra, Paris vb.) ilk 'Daimi Elçilikler' kimin döneminde açıldı?", meaning: "III. Selim (18. YY)" },
        { word: "Fransızcanın ilk resmi yabancı dil (askeri okullarda) kabul edilmesi?", meaning: "III. Selim (18. YY)" }
    ],
    "islahat_19": [
        { word: "Sened-i İttifak'ı imzalayarak padişahın yetkilerini ilk kez kısıtlayan padişah?", meaning: "II. Mahmut (19. YY)" },
        { word: "Sekban-ı Cedit ve Eşkinci Ocağı'nı kuran padişah?", meaning: "II. Mahmut (19. YY)" },
        { word: "Vaka-i Hayriye ile Yeniçeri Ocağı'nı kaldıran padişah?", meaning: "II. Mahmut (19. YY)" },
        { word: "Asakir-i Mansure-i Muhammediye ordusunu kuran padişah?", meaning: "II. Mahmut (19. YY)" },
        { word: "Divan-ı Hümayun'u kaldırıp yerine Nazırlıkları (Bakanlıklar) kuran padişah?", meaning: "II. Mahmut (19. YY)" },
        { word: "Müsadere sistemini kaldıran padişah?", meaning: "II. Mahmut (19. YY)" },
        { word: "Köy ve mahalle muhtarlıklarını kuran padişah?", meaning: "II. Mahmut (19. YY)" },
        { word: "İlk nüfus sayımını (askeri amaçlı) yapan padişah?", meaning: "II. Mahmut (19. YY)" },
        { word: "Takvim-i Vekayi (İlk Resmi Gazete) kimin döneminde çıkarıldı?", meaning: "II. Mahmut (19. YY)" },
        { word: "Devlet memurlarına fes, ceket ve pantolon giyme zorunluluğu getiren padişah?", meaning: "II. Mahmut (19. YY)" },
        { word: "İlköğretimi (İstanbul'da) zorunlu hale getiren padişah?", meaning: "II. Mahmut (19. YY)" },
        { word: "Yurt dışına ilk kez öğrenci gönderen padişah?", meaning: "II. Mahmut (19. YY)" },
        { word: "Mürur Tezkiresi (Pasaport/Geçiş belgesi) uygulamasını başlatan padişah?", meaning: "II. Mahmut (19. YY)" },
        { word: "Tıbbiye ve Harbiye okullarını açan padişah?", meaning: "II. Mahmut (19. YY)" },
        { word: "Tımar sistemini tamamen kaldıran padişah?", meaning: "II. Mahmut (19. YY)" },
        { word: "Osmanlı'da ilk modern posta teşkilatını (posta nezareti) kurduran padişah?", meaning: "II. Mahmut (19. YY)" },
        { word: "İlk karantina teşkilatını (Meclis-i Tahaffuz) kuran padişah?", meaning: "II. Mahmut (19. YY)" },
        { word: "Tanzimat Fermanı'nı ilan eden padişah?", meaning: "Sultan Abdülmecid (19. YY)" },
        { word: "Islahat Fermanı'nı ilan ederek gayrimüslimlere geniş haklar veren padişah?", meaning: "Sultan Abdülmecid (19. YY)" },
        { word: "İlk kağıt para (Kaime) kimin döneminde basıldı?", meaning: "Sultan Abdülmecid (19. YY)" },
        { word: "İlk dış borç (Kırım Savaşı - İngiltere) kimin döneminde alındı?", meaning: "Sultan Abdülmecid (19. YY)" },
        { word: "İlk Osmanlı bankası (Bank-ı Dersaadet) kimin döneminde kuruldu?", meaning: "Sultan Abdülmecid (19. YY)" },
        { word: "İngiliz sermayeli Bank-ı Osmani (Para basma yetkisi olan) ne zaman kuruldu?", meaning: "Sultan Abdülmecid (19. YY)" },
        { word: "Jandarma ve Polis teşkilatının temelleri kimin döneminde atıldı?", meaning: "Sultan Abdülmecid (19. YY)" },
        { word: "İlk telgraf hattı (İstanbul-Edirne-Kırım) kimin döneminde çekildi?", meaning: "Sultan Abdülmecid (19. YY)" },
        { word: "İlk demiryolu hattı (İzmir-Aydın) kimin döneminde yapıldı?", meaning: "Sultan Abdülmecid (19. YY)" },
        { word: "Erkek Öğretmen Okulu (Darülmuallimin) kimin döneminde açıldı?", meaning: "Sultan Abdülmecid (19. YY)" },
        { word: "Encümen-i Daniş (Bilim Kurulu) kimin döneminde kuruldu?", meaning: "Sultan Abdülmecid (19. YY)" },
        { word: "Boğaziçi vapur taşımacılığı için kurulan ilk anonim şirket 'Şirket-i Hayriye' kimin döneminde kuruldu?", meaning: "Sultan Abdülmecid (19. YY)" },
        { word: "Dolmabahçe Sarayı kimin döneminde yapıldı?", meaning: "Sultan Abdülmecid (19. YY)" },
        { word: "Yurt dışına seyahate çıkan ilk ve tek Osmanlı padişahı?", meaning: "Sultan Abdülaziz (19. YY)" },
        { word: "Osmanlı Donanmasını dünyanın en büyük 3. filosu haline getiren padişah?", meaning: "Sultan Abdülaziz (19. YY)" },
        { word: "Mecelle (Medeni Kanun) komisyonunu kim kurdurdu?", meaning: "Sultan Abdülaziz (19. YY)" },
        { word: "Vilayet Nizamnamesi (1864) kimin döneminde çıkarıldı?", meaning: "Sultan Abdülaziz (19. YY)" },
        { word: "Darüşşafaka (Öksüzler Yurdu) kimin döneminde açıldı?", meaning: "Sultan Abdülaziz (19. YY)" },
        { word: "Memleket Sandıkları (Ziraat Bankası'nın temeli) kimin döneminde kuruldu?", meaning: "Sultan Abdülaziz (19. YY)" },
        { word: "Kız Öğretmen Okulu (Darülmuallimat) kimin döneminde açıldı?", meaning: "Sultan Abdülaziz (19. YY)" },
        { word: "Şûrâ-yı Devlet (Danıştay) ve Dîvân-ı Ahkâm-ı Adliyye (Yargıtay'ın temeli) hangi padişah döneminde kurulmuştur?", meaning: "Sultan Abdülaziz (19. YY)" },
        { word: "Hilal-i Ahmer (Kızılay) cemiyeti kimin döneminde kuruldu?", meaning: "II. Abdülhamid (19. YY)" },
        { word: "Çırağan ve Beylerbeyi Sarayları kimin döneminde yapıldı?", meaning: "Sultan Abdülaziz (19. YY)" },
        { word: "I. Meşrutiyet'i (Kanun-i Esasi) ilan eden padişah?", meaning: "II. Abdülhamid (19. YY)" },
        { word: "Duyun-u Umumiye (Genel Borçlar İdaresi) kimin döneminde kuruldu?", meaning: "II. Abdülhamid (19. YY)" },
        { word: "Ziraat Bankası (Memleket Sandıkları'nın dönüşümü) resmen kimin döneminde kuruldu?", meaning: "II. Abdülhamid (19. YY)" },
        { word: "Sanayi-i Nefise Mektebi (Güzel Sanatlar Fakültesi) kimin döneminde açıldı?", meaning: "II. Abdülhamid (19. YY)" },
        { word: "Ertuğrul Fırkateyni'ni Japonya'ya gönderen padişah?", meaning: "II. Abdülhamid (19. YY)" },
        { word: "Berlin-Bağdat demiryolu projesi (Almanlarla) kimin döneminde başladı?", meaning: "II. Abdülhamid (19. YY)" },
        { word: "Hamidiye Alayları (Doğu Anadolu için) kimin döneminde kuruldu?", meaning: "II. Abdülhamid (19. YY)" },
        { word: "Darülaceze (Düşkünler Yurdu) ve Şişli Etfal Hastanesi'ni kuran padişah?", meaning: "II. Abdülhamid (19. YY)" },
        { word: "Müze-i Hümayun (İstanbul Arkeoloji Müzesi - Osman Hamdi Bey) kimin döneminde kuruldu?", meaning: "II. Abdülhamid (19. YY)" },
        { word: "Hicaz Demiryolu'nu (Şam - Medine hattı) yaptıran padişah?", meaning: "II. Abdülhamid (19. YY)" },
        { word: "II. Meşrutiyet'i ilan ederek Meclis-i Mebusan'ı yeniden açan padişah?", meaning: "II. Abdülhamid (20. YY Başları)" },
        { word: "Yıldız Sarayı'nı yönetim merkezi olarak kullanan padişah?", meaning: "II. Abdülhamid (19. YY)" },
        { word: "Tarihimizde rejimi değiştirmeye yönelik çıkan ilk isyan?", meaning: "31 Mart Olayı (Meşrutiyet'e karşı) (20. YY)" }
    ],
    "inkilap_tarihi": [
        { word: "Mustafa Kemal'in 'Milli Mücadele'yi fiilen başlattığı olay?", meaning: "19 Mayıs 1919 Samsun’a Çıkış" },
        { word: "Milli Mücadelenin amaç, gerekçe ve yönteminin ilk kez belirtildiği belge?", meaning: "Amasya Genelgesi" },
        { word: "Temsil Heyeti'nin ilk kez oluşturulduğu kongre?", meaning: "Erzurum Kongresi" },
        { word: "Milli sınırlardan ilk kez bahsedilen kongre?", meaning: "Erzurum Kongresi" },
        { word: "Mandacılık ve himayenin kesin olarak reddedildiği kongre?", meaning: "Sivas Kongresi" },
        { word: "Milli cemiyetlerin tek çatı altında birleştiği kongre?", meaning: "Sivas Kongresi" },
        { word: "İstanbul Hükümeti'nin Temsil Heyeti'ni resmen tanıdığı görüşme?", meaning: "Amasya Görüşmeleri" },
        { word: "Son Osmanlı Mebusan Meclisi'nde kabul edilen ve milli sınırları çizen belge?", meaning: "Misak-ı Milli" },
        { word: "İstanbul’un resmen işgaline sebep olan gelişme?", meaning: "Misak-ı Milli’nin kabulü" },
        { word: "I. TBMM’nin açılış tarihi?", meaning: "23 Nisan 1920" },
        { word: "I. TBMM’nin aldığı ilk yasa?", meaning: "Ağnam (Koyun Vergisi) Kanunu" },
        { word: "Hıyanet-i Vataniye Kanunu’nun çıkarılma amacı?", meaning: "İç isyanları bastırmak" },
        { word: "TBMM’nin uluslararası alanda kazandığı ilk siyasi zafer?", meaning: "Gümrü Antlaşması (Ermenistan)" },
        { word: "Düzenli ordunun ilk askeri başarısı?", meaning: "I. İnönü Savaşı" },
        { word: "İstiklal Marşı’nın kabulü hangi savaş sonucunda olmuştur?", meaning: "I. İnönü Savaşı" },
        { word: "Londra Konferansı'na TBMM'nin çağrılmasını sağlayan savaş?", meaning: "I. İnönü Savaşı" },
        { word: "Tekalif-i Milliye Emirleri hangi savaş öncesinde çıkarıldı?", meaning: "Sakarya Savaşı" },
        { word: "Hattı müdafaa yoktur, sathı müdafaa vardır sözü?", meaning: "Sakarya Meydan Muharebesi" },
        { word: "Mustafa Kemal’e Gazilik ve Mareşallik unvanı hangi savaş sonrası verildi?", meaning: "Sakarya Savaşı" },
        { word: "Kurtuluş Savaşı'nın kesin zaferle sonuçlanan son büyük taarruzu?", meaning: "Büyük Taarruz – Başkomutanlık Meydan Muharebesi" },
        { word: "Güney Cephesi'nin kapanmasına neden olan antlaşma?", meaning: "Ankara Antlaşması (Fransa–1921)" },
        { word: "Doğu sınırımızı kesinleştiren antlaşma?", meaning: "Kars Antlaşması" },
        { word: "Kurtuluş Savaşı’nın askeri safhasını bitiren ateşkes?", meaning: "Mudanya Ateşkesi" },
        { word: "Yeni Türk Devleti’nin bağımsızlığını tüm dünyaya kabul ettiren antlaşma?", meaning: "Lozan Barış Antlaşması" },
        { word: "Lozan'da çözülemeyip sonradan çözülen tek sınır sorunu?", meaning: "Musul (Irak Sınırı)" },
        { word: "Laikliğe geçişin ilk aşaması ve Osmanlı'nın resmen sonu?", meaning: "Saltanatın Kaldırılması (1922)" },
        { word: "Türkiye’nin yönetim şekli ve devlet adının belli olduğu gelişme?", meaning: "Cumhuriyetin İlanı (1923)" },
        { word: "Laikliğin en önemli aşaması?", meaning: "Halifeliğin Kaldırılması (1924)" },
        { word: "Eğitim–öğretimin devlet kontrolünde birleştirildiği kanun?", meaning: "Tevhid-i Tedrisat Kanunu" },
        { word: "Kadınlara sosyal–ekonomik haklar veren, çok eşliliği yasaklayan kanun?", meaning: "Türk Medeni Kanunu (1926)" },
        { word: "Yeni Türk harflerinin kabulü?", meaning: "1928" },
        { word: "Toplumsal unvanların (ağa, paşa, hacı vb.) kaldırılması?", meaning: "Soyadı Kanunu (1934)" },
        { word: "Kadınlara yerel seçimlerde seçme hakkı?", meaning: "1930" },
        { word: "Kadınlara milletvekili seçme ve seçilme hakkı?", meaning: "1934" },
        { word: "İnkılapları halka anlatmak amacıyla kurulan kurumlar?", meaning: "Halkevleri (1932)" },
        { word: "Köylüyü modern tarım metotlarıyla tanıştıran kurum?", meaning: "Köy Enstitüleri (1940 – Atatürk sonrası)" },
        { word: "Laiklik ilkesinin anayasaya girdiği yıl?", meaning: "1937" },
        { word: "'Seçim, Meclis, Milli İrade' hangi ilkeyle ilişkilidir?", meaning: "Cumhuriyetçilik" },
        { word: "'Akıl ve bilim, din–devlet ayrımı' hangi ilkeyle ilişkilidir?", meaning: "Laiklik" },
        { word: "'Eşitlik, sınıf ayrımı yok, sosyal adalet' hangi ilke?", meaning: "Halkçılık" },
        { word: "'Ulusal bağımsızlık, milli birlik, Misak-ı Milli' hangi ilke?", meaning: "Milliyetçilik" },
        { word: "'Yenilik, değişim, modernleşme' hangi ilke?", meaning: "İnkılapçılık" },
        { word: "'Devletin ekonomik alanda düzenleyici, yatırımcı olması' hangi ilke?", meaning: "Devletçilik" },
        { word: "Türkiye'nin Milletler Cemiyeti'ne kabul edildiği yıl?", meaning: "1932" },
        { word: "Türkiye ile Yunanistan arasındaki nüfus değişimi hangi antlaşmayla çözüldü?", meaning: "1930 Ahali (Mübadele) Antlaşması" },
        { word: "Boğazlarda tam egemenliğin kazanıldığı sözleşme?", meaning: "Montrö Boğazlar Sözleşmesi (1936)" },
        { word: "Türkiye–İran–Irak–Afganistan arasında kurulan pakt?", meaning: "Sadabat Paktı (1937)" },
        { word: "Türkiye–Yunanistan–Yugoslavya–Romanya arasında kurulan pakt?", meaning: "Balkan Antantı (1934)" },
        { word: "Atatürk'ün 'şahsi meselem' dediği ve Türkiye’ye katılan yer?", meaning: "Hatay (1939)" }
    ],
    "cagdas_turk": [
        { word: "SSCB'nin Türkistan'ı işgaline karşı başlatılan direniş hareketi?", meaning: "Basmacı Hareketi" },
        { word: "Basmacı Hareketi'ne katılan ünlü Osmanlı komutanı?", meaning: "Enver Paşa" },
        { word: "Japonya'nın kapılarını dünyaya açtığı ve modernleştiği dönem?", meaning: "Meiji Restorasyonu (Aydınlanma)" },
        { word: "1929 Dünya Ekonomik Krizi'nin (Kara Perşembe) başladığı ülke?", meaning: "ABD" },
        { word: "II. Dünya Savaşı'nda Almanya'nın SSCB'yi işgal planı?", meaning: "Barbarossa Harekatı" },
        { word: "ABD'nin II. Dünya Savaşı'na girmesine neden olan olay?", meaning: "Pearl Harbor Baskını (Japonya)" },
        { word: "II. Dünya Savaşı'nda Müttefiklerin Avrupa'yı kurtarmak için yaptığı çıkarma?", meaning: "Normandiya Çıkarması (Overlord Harekâtı)" },
        { word: "II. Dünya Savaşı'nı bitiren ve Japonya'ya atom bombası atılan şehirler?", meaning: "Hiroşima ve Nagazaki" },
        { word: "II. Dünya Savaşı'ndan sonra dünya barışını korumak için kurulan örgüt?", meaning: "Birleşmiş Milletler (BM)" },
        { word: "Türkiye'nin II. Dünya Savaşı'ndaki resmi politikası?", meaning: "Aktif Tarafsızlık (Denge Politikası)" },
        { word: "Alman saldırısına karşı Trakya sınırında oluşturulan savunma hattı?", meaning: "Çakmak Hattı" },
        { word: "Savaş zenginlerinden bir defaya mahsus alınan vergi?", meaning: "Varlık Vergisi" },
        { word: "II. Dünya Savaşı yıllarında köylüyü eğitmek için kurulan kurum?", meaning: "Köy Enstitüleri (1940)" },
        { word: "Türkiye'nin BM'ye kurucu üye olabilmek için savaşın sonunda kâğıt üzerinde savaş ilan ettiği ülkeler?", meaning: "Almanya ve Japonya" },
        { word: "Doğu Bloku'na (SSCB) karşı Batı Bloku'nun (ABD) kurduğu askeri örgüt?", meaning: "NATO" },
        { word: "NATO'ya karşı SSCB ve Doğu Bloku'nun kurduğu askeri örgüt?", meaning: "Varşova Paktı" },
        { word: "SSCB'nin kurduğu ekonomik işbirliği örgütü (NATO-AB'ye karşı)?", meaning: "COMECON" },
        { word: "Avrupa'yı Doğu ve Batı olarak ayıran siyasi–askeri çizgiye ne ad verilir?", meaning: "Demir Perde" },
        { word: "ABD'nin komünizm tehdidi altındaki ülkelere yaptığı askeri yardım doktrini?", meaning: "Truman Doktrini" },
        { word: "ABD'nin Avrupa ülkelerini kalkındırmak için yaptığı ekonomik yardım planı?", meaning: "Marshall Planı" },
        { word: "İsrail Devleti'nin kurulduğu yıl?", meaning: "1948" },
        { word: "Hindistan'ın bağımsızlık lideri (Pasif Direniş)?", meaning: "Mahatma Gandhi" },
        { word: "Türkiye'nin Kore Savaşı'na asker gönderme kararı aldığı yıl?", meaning: "1950" },
        { word: "Kore Savaşı'nda Türk tugayının büyük başarı kazandığı zafer?", meaning: "Kunuri Zaferi" },
        { word: "Türkiye'nin NATO'ya üye olduğu yıl (Kore başarısı sonrası)?", meaning: "1952" },
        { word: "Türkiye'nin üye olduğu ilk bölgesel savunma paktı?", meaning: "Balkan Paktı (1953)" },
        { word: "Türkiye, İran, Irak, Pakistan ve İngiltere'nin içinde olduğu Orta Doğu merkezli savunma paktı?", meaning: "Bağdat Paktı (CENTO)" },
        { word: "Adnan Menderes döneminde yaşanan ve azınlıklara yönelik tahrip olayları?", meaning: "6-7 Eylül Olayları (1955)" },
        { word: "Türkiye'de çok partili hayata geçiş denemesi kapsamında kurulan ilk muhalefet partisi?", meaning: "Terakkiperver Cumhuriyet Fırkası (1924)" },
        { word: "Türkiye'de kalıcı çok partili hayata geçişi başlatan siyasi parti?", meaning: "Demokrat Parti (1946)" },
        { word: "Türkiye'nin ilk askeri darbesi (Menderes iktidarının devrilmesi)?", meaning: "27 Mayıs 1960 Darbesi" },
        { word: "12 Mart 1971 Muhtırası ile istifa ettirilen başbakan?", meaning: "Süleyman Demirel" },
        { word: "12 Eylül 1980 darbesinin lideri ve sonrasında cumhurbaşkanı olan kişi?", meaning: "Kenan Evren" },
        { word: "28 Şubat 1997 sürecinde görevden uzaklaştırılan Refah–Yol hükümetinin başbakanı?", meaning: "Necmettin Erbakan" },
        { word: "Yumuşama (detant) dönemini başlatan ABD ve SSCB liderleri?", meaning: "Kennedy ve Kruşçev" },
        { word: "ABD ile Çin arasındaki ilişkileri düzelten diplomasiye ne ad verilir?", meaning: "Ping-Pong Diplomasisi" },
        { word: "Nükleer silahların sınırlandırılması görüşmelerine ne ad verilir?", meaning: "SALT I ve SALT II" },
        { word: "İran-Irak savaşında (1980–88) ABD'nin gizlice İran'a silah satması skandalı?", meaning: "İrangate Olayı" },
        { word: "SSCB'nin Afganistan'ı işgali üzerine boykot edilen olimpiyatlar?", meaning: "1980 Moskova Olimpiyatları" },
        { word: "SSCB'nin dağılmasına giden süreçte reform yapan son Sovyet lideri?", meaning: "Mihail Gorbaçov" },
        { word: "Gorbaçov'un 'açıklık' ve 'yeniden yapılandırma' politikalarının isimleri?", meaning: "Glasnost ve Perestroyka" },
        { word: "Kıbrıs Rumlarının adayı Yunanistan'a bağlama ülküsü?", meaning: "Enosis" },
        { word: "Kıbrıs Türklerini korumak için kurulan direniş örgütü?", meaning: "Türk Mukavemet Teşkilatı (TMT)" },
        { word: "ABD Başkanı'nın Türkiye'nin Kıbrıs'a müdahalesini engellemek için gönderdiği mektup?", meaning: "Johnson Mektubu (1964)" },
        { word: "1974 Kıbrıs Barış Harekâtı'nın parolası?", meaning: "“Ayşe Tatile Çıksın”" },
        { word: "Kıbrıs Barış Harekâtı sırasındaki Başbakan ve Başbakan Yardımcısı?", meaning: "Bülent Ecevit – Necmettin Erbakan" },
        { word: "Kuzey Kıbrıs Türk Cumhuriyeti'nin (KKTC) kurucu cumhurbaşkanı?", meaning: "Rauf Denktaş" },
        { word: "Ermeni terör örgütü ASALA'nın Türk diplomatlarına yönelik eylemleri hangi dönemde yoğunlaşmıştır?", meaning: "1975–1985 arası" },
        { word: "Türkiye'nin Avrupa Ekonomik Topluluğu'na (AET) ilk başvuru yaptığı yıl?", meaning: "1959" },
        { word: "Türkiye ile AET arasında imzalanan Ankara Anlaşması'nın tarihi?", meaning: "1963" },
        { word: "Türkiye'nin Avrupa Birliği ile Gümrük Birliği'ne girdiği yıl?", meaning: "1996" },
        { word: "SSCB'nin dağılmasından sonra Türk Cumhuriyetleri ile ilişkileri geliştirmek için kurulan ajans?", meaning: "TİKA (Türk İşbirliği ve Koordinasyon Ajansı)" },
        { word: "Orta Asya'daki Türk Cumhuriyetlerinin bağımsızlığını tanıyan ilk ülke?", meaning: "Türkiye" },
        { word: "Azerbaycan'ın bağımsızlık lideri ve ilk cumhurbaşkanı?", meaning: "Ebulfez Elçibey" },
        { word: "Bosna Hersek'in 'Bilge Kral' olarak bilinen lideri?", meaning: "Aliya İzzetbegoviç" },
        { word: "Bosna Savaşı'nı bitiren antlaşma?", meaning: "Dayton Antlaşması (1995)" },
        { word: "Küresel ısınmaya karşı imzalanan uluslararası protokol?", meaning: "Kyoto Protokolü" },
        { word: "Arap Baharı'nın başladığı ilk ülke?", meaning: "Tunus (Yasemin Devrimi)" }
    ]
};

// =================================================================
// OYUN MANTIĞI VE KONTROLLER
// =================================================================

// =================================================================
// OYUN MANTIĞI VE KONTROLLER (OTOMATİK AKIŞ GÜNCELLEMESİ)
// =================================================================

let currentList = [];
let currentCategoryName = "";
let autoTimer; // Zamanlayıcıyı kontrol etmek için değişken

// 1. ISLAHAT MENÜSÜNÜ GÖSTERME
function showIslahatMenu() {
    document.getElementById('menu-screen').style.display = 'none';
    document.getElementById('islahat-submenu').style.display = 'flex';
    
    const submenu = document.getElementById('islahat-submenu');
    submenu.style.flexDirection = 'column';
    submenu.style.alignItems = 'center';
    submenu.style.justifyContent = 'flex-start';
}

// 2. ANA MENÜYE DÖNÜŞ
function backToMainMenu() {
    document.getElementById('islahat-submenu').style.display = 'none';
    document.getElementById('menu-screen').style.display = 'flex';
}

// 3. OYUNU BAŞLATMA
function startGame(categoryKey) {
    // Listeyi Hazırla
    if (categoryKey === 'islahat_all') {
        currentList = [
            ...database['islahat_17'],
            ...database['islahat_18'],
            ...database['islahat_19']
        ];
        document.getElementById('topic-title').innerText = "Tüm Osmanlı Islahatları";
    } else {
        currentList = [...database[categoryKey]];
        // Başlıklar...
        const titles = {
            "islamiyet_oncesi": "İslamiyet Öncesi Türk Tarihi",
            "turk_islam": "İlk Türk-İslam Devletleri",
            "osmanli_kultur": "Osmanlı Kültür & Medeniyet",
            "osmanli_siyasi": "Osmanlı Siyasi Tarihi",
            "inkilap_tarihi": "İnkılap Tarihi",
            "cagdas_turk": "Çağdaş Türk ve Dünya Tarihi",
            "islahat_17": "17. Yüzyıl Islahatları",
            "islahat_18": "18. Yüzyıl Islahatları",
            "islahat_19": "19. Yüzyıl Islahatları"
        };
        document.getElementById('topic-title').innerText = titles[categoryKey];
    }
    
    // Ekran Geçişi
    document.getElementById('menu-screen').style.display = 'none';
    document.getElementById('islahat-submenu').style.display = 'none';
    document.getElementById('game-screen').style.display = 'flex';
    
    document.getElementById('count').innerText = currentList.length;
    
    // Kartı Gizle ama...
    document.getElementById('result-card').style.display = 'none';
    
    // ...Hemen ilk soruyu otomatik çek!
    drawPaper();
}

function goBack() {
    clearTimeout(autoTimer); // Eğer geri tuşuna basılırsa sayacı iptal et
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('menu-screen').style.display = 'flex';
}

function drawPaper() {
    const resultCard = document.getElementById('result-card');
    const wordText = document.getElementById('word-text');
    const wordMeaning = document.getElementById('word-meaning');
    const meaningBtn = document.querySelector('.reveal-btn');

    if (currentList.length === 0) {
        alert("Bu konudaki tüm sorular bitti! Menüye dönülüyor.");
        goBack();
        return;
    }

    const randomIndex = Math.floor(Math.random() * currentList.length);
    const selected = currentList[randomIndex];

    // İçeriği Doldur
    wordText.innerHTML = selected.word;
    wordMeaning.innerHTML = selected.meaning;
    
    // Görünümü Ayarla
    wordMeaning.style.display = 'none'; // Cevap gizli
    meaningBtn.style.display = 'block'; // Buton görünür
    meaningBtn.innerText = "CEVABI GÖSTER"; // Buton yazısını sıfırla
    meaningBtn.disabled = false; // Tıklanabilir yap
    
    resultCard.style.display = 'block'; // Kartı aç

    currentList.splice(randomIndex, 1);
    document.getElementById('count').innerText = currentList.length;
}

function showMeaning() {
    // Cevabı aç
    document.getElementById('word-meaning').style.display = 'block';
    
    // Butonu pasif yap ve geri sayım mesajı ver
    const btn = document.querySelector('.reveal-btn');
    btn.style.display = 'block'; // Buton kalsın ama işlevi değişsin
    btn.disabled = true; // Tıklamayı engelle
    btn.innerText = "Yeni soru geliyor... (3)";
    
    // Geri sayım efekti (Opsiyonel estetik)
    let timeLeft = 3;
    const countdown = setInterval(() => {
        timeLeft--;
        if(timeLeft > 0) {
            btn.innerText = `Yeni soru geliyor... (${timeLeft})`;
        } else {
            clearInterval(countdown);
        }
    }, 1000);

    // 3 Saniye Sonra Yeni Soru Çek
    autoTimer = setTimeout(() => {
        drawPaper();
    }, 3000); // 3000 milisaniye = 3 saniye
}

