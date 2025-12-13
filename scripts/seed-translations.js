/**
 * Seed script for initial translations
 * Run with: node scripts/seed-translations.js
 * 
 * Supports 5 languages: Azerbaijani (az), English (en), Russian (ru), Turkish (tr), German (de)
 */

// Translation data structure: { key, namespace, translations: { az, en, ru, tr, de } }
const translationData = [
  // ========== COMMON NAMESPACE ==========
  // Language names (for language selector)
  { key: 'az', namespace: 'common', translations: { az: 'Azərbaycan', en: 'Azerbaijani', ru: 'Азербайджанский', tr: 'Azerbaycan', de: 'Aserbaidschanisch' } },
  { key: 'en', namespace: 'common', translations: { az: 'İngilis', en: 'English', ru: 'Английский', tr: 'İngilizce', de: 'Englisch' } },
  { key: 'ru', namespace: 'common', translations: { az: 'Rus', en: 'Russian', ru: 'Русский', tr: 'Rusça', de: 'Russisch' } },
  { key: 'tr', namespace: 'common', translations: { az: 'Türk', en: 'Turkish', ru: 'Турецкий', tr: 'Türkçe', de: 'Türkisch' } },
  { key: 'de', namespace: 'common', translations: { az: 'Alman', en: 'German', ru: 'Немецкий', tr: 'Almanca', de: 'Deutsch' } },
  { key: 'confirm', namespace: 'common', translations: { az: 'Təsdiq et', en: 'Confirm', ru: 'Подтвердить', tr: 'Onayla', de: 'Bestätigen' } },
  { key: 'cancel', namespace: 'common', translations: { az: 'Ləğv et', en: 'Cancel', ru: 'Отмена', tr: 'İptal', de: 'Abbrechen' } },
  { key: 'loading', namespace: 'common', translations: { az: 'Yüklənir...', en: 'Loading...', ru: 'Загрузка...', tr: 'Yükleniyor...', de: 'Wird geladen...' } },
  { key: 'delete', namespace: 'common', translations: { az: 'Sil', en: 'Delete', ru: 'Удалить', tr: 'Sil', de: 'Löschen' } },
  { key: 'save', namespace: 'common', translations: { az: 'Yadda saxla', en: 'Save', ru: 'Сохранить', tr: 'Kaydet', de: 'Speichern' } },
  { key: 'edit', namespace: 'common', translations: { az: 'Redaktə et', en: 'Edit', ru: 'Редактировать', tr: 'Düzenle', de: 'Bearbeiten' } },
  { key: 'view', namespace: 'common', translations: { az: 'Bax', en: 'View', ru: 'Просмотр', tr: 'Görüntüle', de: 'Anzeigen' } },

  // ========== AUTH NAMESPACE ==========
  { key: 'username', namespace: 'auth', translations: { az: 'İstifadəçi adı', en: 'Username', ru: 'Имя пользователя', tr: 'Kullanıcı adı', de: 'Benutzername' } },
  { key: 'password', namespace: 'auth', translations: { az: 'Şifrə', en: 'Password', ru: 'Пароль', tr: 'Şifre', de: 'Passwort' } },
  { key: 'loginFailed', namespace: 'auth', translations: { az: 'Giriş uğursuz oldu', en: 'Login failed', ru: 'Ошибка входа', tr: 'Giriş başarısız', de: 'Anmeldung fehlgeschlagen' } },
  { key: 'continue', namespace: 'auth', translations: { az: 'Davam et', en: 'Continue', ru: 'Продолжить', tr: 'Devam et', de: 'Fortfahren' } },
  { key: 'noAccount', namespace: 'auth', translations: { az: 'Hesabınız yoxdur?', en: 'Don\'t have an account?', ru: 'Нет аккаунта?', tr: 'Hesabınız yok mu?', de: 'Kein Konto?' } },
  { key: 'register', namespace: 'auth', translations: { az: 'Qeydiyyatdan keç', en: 'Register', ru: 'Регистрация', tr: 'Kayıt ol', de: 'Registrieren' } },

  // ========== NAVIGATION NAMESPACE ==========
  { key: 'dashboard', namespace: 'navigation', translations: { az: 'DASHBOARD', en: 'DASHBOARD', ru: 'ПАНЕЛЬ', tr: 'KONTROL PANELİ', de: 'DASHBOARD' } },
  { key: 'allInOne', namespace: 'navigation', translations: { az: 'ALL-IN-ONE', en: 'ALL-IN-ONE', ru: 'ВСЁ В ОДНОМ', tr: 'HEPSİ BİR ARADA', de: 'ALL-IN-ONE' } },
  { key: 'acquiring', namespace: 'navigation', translations: { az: 'ACQUIRING', en: 'ACQUIRING', ru: 'ЭКВАЙРИНГ', tr: 'EDİNİM', de: 'ACQUIRING' } },
  { key: 'accounting', namespace: 'navigation', translations: { az: 'ACCOUNTING', en: 'ACCOUNTING', ru: 'УЧЁТ', tr: 'MUHASEBE', de: 'BUCHHALTUNG' } },
  { key: 'exports', namespace: 'navigation', translations: { az: 'EXPORTS', en: 'EXPORTS', ru: 'ЭКСПОРТ', tr: 'DİŞA AKTARMA', de: 'EXPORTE' } },

  // ========== DASHBOARD NAMESPACE ==========
  { key: 'serverRack', namespace: 'dashboard', translations: { az: 'Server Rack', en: 'Server Rack', ru: 'Серверная стойка', tr: 'Sunucu Rafı', de: 'Server-Rack' } },
  { key: 'network', namespace: 'dashboard', translations: { az: 'Network', en: 'Network', ru: 'Сеть', tr: 'Ağ', de: 'Netzwerk' } },
  { key: 'firewall', namespace: 'dashboard', translations: { az: 'Firewall', en: 'Firewall', ru: 'Файрвол', tr: 'Güvenlik Duvarı', de: 'Firewall' } },
  { key: 'database', namespace: 'dashboard', translations: { az: 'Database', en: 'Database', ru: 'База данных', tr: 'Veritabanı', de: 'Datenbank' } },
  { key: 'webServer', namespace: 'dashboard', translations: { az: 'Web Server', en: 'Web Server', ru: 'Веб-сервер', tr: 'Web Sunucusu', de: 'Web-Server' } },
  { key: 'operational', namespace: 'dashboard', translations: { az: 'Operational', en: 'Operational', ru: 'Работает', tr: 'Çalışıyor', de: 'Betriebsbereit' } },
  { key: 'inMaintenance', namespace: 'dashboard', translations: { az: 'In Maintenance', en: 'In Maintenance', ru: 'На обслуживании', tr: 'Bakımda', de: 'In Wartung' } },
  // Chart titles and labels
  { key: 'monthlyTransactionVolume', namespace: 'dashboard', translations: { az: 'Aylıq Əməliyyat Həcmi', en: 'Monthly Transaction Volume', ru: 'Месячный объем транзакций', tr: 'Aylık İşlem Hacmi', de: 'Monatliches Transaktionsvolumen' } },
  { key: 'transactionStatusDistribution', namespace: 'dashboard', translations: { az: 'Əməliyyat Statusu Bölgüsü', en: 'Transaction Status Distribution', ru: 'Распределение статусов транзакций', tr: 'İşlem Durumu Dağılımı', de: 'Transaktionsstatus-Verteilung' } },
  { key: 'weeklyTransactions', namespace: 'dashboard', translations: { az: 'Həftəlik Əməliyyatlar', en: 'Weekly Transactions', ru: 'Недельные транзакции', tr: 'Haftalık İşlemler', de: 'Wöchentliche Transaktionen' } },
  { key: 'merchantPerformance', namespace: 'dashboard', translations: { az: 'Satıcı Performansı', en: 'Merchant Performance', ru: 'Производительность продавца', tr: 'Satıcı Performansı', de: 'Händlerleistung' } },
  { key: 'amount', namespace: 'dashboard', translations: { az: 'Məbləğ (₼)', en: 'Amount (₼)', ru: 'Сумма (₼)', tr: 'Tutar (₼)', de: 'Betrag (₼)' } },
  { key: 'count', namespace: 'dashboard', translations: { az: 'Sayı', en: 'Count', ru: 'Количество', tr: 'Sayı', de: 'Anzahl' } },
  { key: 'transactions', namespace: 'dashboard', translations: { az: 'Əməliyyatlar', en: 'Transactions', ru: 'Транзакции', tr: 'İşlemler', de: 'Transaktionen' } },
  { key: 'transactionCount', namespace: 'dashboard', translations: { az: 'Əməliyyat Sayı', en: 'Transaction Count', ru: 'Количество транзакций', tr: 'İşlem Sayısı', de: 'Transaktionsanzahl' } },
  { key: 'revenue', namespace: 'dashboard', translations: { az: 'Gəlir (₼)', en: 'Revenue (₼)', ru: 'Доход (₼)', tr: 'Gelir (₼)', de: 'Umsatz (₼)' } },
  // Status labels for charts
  { key: 'status.completed', namespace: 'dashboard', translations: { az: 'Tamamlanmış', en: 'Completed', ru: 'Завершено', tr: 'Tamamlandı', de: 'Abgeschlossen' } },
  { key: 'status.pending', namespace: 'dashboard', translations: { az: 'Gözləmədə', en: 'Pending', ru: 'В ожидании', tr: 'Beklemede', de: 'Ausstehend' } },
  { key: 'status.failed', namespace: 'dashboard', translations: { az: 'Uğursuz', en: 'Failed', ru: 'Неудачно', tr: 'Başarısız', de: 'Fehlgeschlagen' } },
  { key: 'status.noBalance', namespace: 'dashboard', translations: { az: 'Balans Yoxdur', en: 'No Balance', ru: 'Нет баланса', tr: 'Bakiye Yok', de: 'Kein Guthaben' } },
  // Month abbreviations
  { key: 'month.jan', namespace: 'dashboard', translations: { az: 'Yan', en: 'Jan', ru: 'Янв', tr: 'Oca', de: 'Jan' } },
  { key: 'month.feb', namespace: 'dashboard', translations: { az: 'Fev', en: 'Feb', ru: 'Фев', tr: 'Şub', de: 'Feb' } },
  { key: 'month.mar', namespace: 'dashboard', translations: { az: 'Mar', en: 'Mar', ru: 'Мар', tr: 'Mar', de: 'Mär' } },
  { key: 'month.apr', namespace: 'dashboard', translations: { az: 'Apr', en: 'Apr', ru: 'Апр', tr: 'Nis', de: 'Apr' } },
  { key: 'month.may', namespace: 'dashboard', translations: { az: 'May', en: 'May', ru: 'Май', tr: 'May', de: 'Mai' } },
  { key: 'month.jun', namespace: 'dashboard', translations: { az: 'İyn', en: 'Jun', ru: 'Июн', tr: 'Haz', de: 'Jun' } },
  { key: 'month.jul', namespace: 'dashboard', translations: { az: 'İyl', en: 'Jul', ru: 'Июл', tr: 'Tem', de: 'Jul' } },
  { key: 'month.aug', namespace: 'dashboard', translations: { az: 'Avq', en: 'Aug', ru: 'Авг', tr: 'Ağu', de: 'Aug' } },
  { key: 'month.sep', namespace: 'dashboard', translations: { az: 'Sen', en: 'Sep', ru: 'Сен', tr: 'Eyl', de: 'Sep' } },
  { key: 'month.oct', namespace: 'dashboard', translations: { az: 'Okt', en: 'Oct', ru: 'Окт', tr: 'Eki', de: 'Okt' } },
  { key: 'month.nov', namespace: 'dashboard', translations: { az: 'Noy', en: 'Nov', ru: 'Ноя', tr: 'Kas', de: 'Nov' } },
  // Day abbreviations
  { key: 'day.mon', namespace: 'dashboard', translations: { az: 'B.e', en: 'Mon', ru: 'Пн', tr: 'Pzt', de: 'Mo' } },
  { key: 'day.tue', namespace: 'dashboard', translations: { az: 'Ç.a', en: 'Tue', ru: 'Вт', tr: 'Sal', de: 'Di' } },
  { key: 'day.wed', namespace: 'dashboard', translations: { az: 'Ç', en: 'Wed', ru: 'Ср', tr: 'Çar', de: 'Mi' } },
  { key: 'day.thu', namespace: 'dashboard', translations: { az: 'C.a', en: 'Thu', ru: 'Чт', tr: 'Per', de: 'Do' } },
  { key: 'day.fri', namespace: 'dashboard', translations: { az: 'C', en: 'Fri', ru: 'Пт', tr: 'Cum', de: 'Fr' } },
  { key: 'day.sat', namespace: 'dashboard', translations: { az: 'Ş', en: 'Sat', ru: 'Сб', tr: 'Cmt', de: 'Sa' } },
  { key: 'day.sun', namespace: 'dashboard', translations: { az: 'B', en: 'Sun', ru: 'Вс', tr: 'Paz', de: 'So' } },

  // ========== TRANSACTIONS NAMESPACE ==========
  { key: 'transactionDetails', namespace: 'transactions', translations: { az: 'Əməliyyat Məlumatları', en: 'Transaction Details', ru: 'Детали транзакции', tr: 'İşlem Detayları', de: 'Transaktionsdetails' } },
  { key: 'transactionId', namespace: 'transactions', translations: { az: 'Əməliyyat ID', en: 'Transaction ID', ru: 'ID транзакции', tr: 'İşlem ID', de: 'Transaktions-ID' } },
  { key: 'status', namespace: 'transactions', translations: { az: 'Status', en: 'Status', ru: 'Статус', tr: 'Durum', de: 'Status' } },
  { key: 'type', namespace: 'transactions', translations: { az: 'Tip', en: 'Type', ru: 'Тип', tr: 'Tür', de: 'Typ' } },
  { key: 'merchant', namespace: 'transactions', translations: { az: 'Merchant', en: 'Merchant', ru: 'Торговец', tr: 'Satıcı', de: 'Händler' } },
  { key: 'id', namespace: 'transactions', translations: { az: 'ID', en: 'ID', ru: 'ID', tr: 'ID', de: 'ID' } },
  { key: 'financialInfo', namespace: 'transactions', translations: { az: 'Maliyyə Məlumatları', en: 'Financial Information', ru: 'Финансовая информация', tr: 'Mali Bilgiler', de: 'Finanzinformationen' } },
  { key: 'amount', namespace: 'transactions', translations: { az: 'Məbləğ', en: 'Amount', ru: 'Сумма', tr: 'Tutar', de: 'Betrag' } },
  { key: 'aa', namespace: 'transactions', translations: { az: 'AA', en: 'AA', ru: 'AA', tr: 'AA', de: 'AA' } },
  { key: 'fee', namespace: 'transactions', translations: { az: 'Komissiya', en: 'Fee', ru: 'Комиссия', tr: 'Ücret', de: 'Gebühr' } },
  { key: 'currency', namespace: 'transactions', translations: { az: 'Valyuta', en: 'Currency', ru: 'Валюта', tr: 'Para Birimi', de: 'Währung' } },
  { key: 'iban', namespace: 'transactions', translations: { az: 'IBAN', en: 'IBAN', ru: 'IBAN', tr: 'IBAN', de: 'IBAN' } },
  { key: 'transactionDate', namespace: 'transactions', translations: { az: 'Əməliyyat Tarixi', en: 'Transaction Date', ru: 'Дата транзакции', tr: 'İşlem Tarihi', de: 'Transaktionsdatum' } },
  { key: 'createdDate', namespace: 'transactions', translations: { az: 'Yaradılma Tarixi', en: 'Created Date', ru: 'Дата создания', tr: 'Oluşturulma Tarihi', de: 'Erstellungsdatum' } },
  { key: 'noDataFound', namespace: 'transactions', translations: { az: 'Məlumat tapılmadı', en: 'No data found', ru: 'Данные не найдены', tr: 'Veri bulunamadı', de: 'Keine Daten gefunden' } },
  // Transaction Status translations
  { key: 'status.paid', namespace: 'transactions', translations: { az: 'Ödənilib', en: 'Paid', ru: 'Оплачено', tr: 'Ödendi', de: 'Bezahlt' } },
  { key: 'status.inProgress', namespace: 'transactions', translations: { az: 'Davam edir', en: 'In Progress', ru: 'В процессе', tr: 'Devam Ediyor', de: 'In Bearbeitung' } },
  { key: 'status.error', namespace: 'transactions', translations: { az: 'Xəta', en: 'Error', ru: 'Ошибка', tr: 'Hata', de: 'Fehler' } },
  { key: 'status.noBalance', namespace: 'transactions', translations: { az: 'Balans yoxdur', en: 'No Balance', ru: 'Нет баланса', tr: 'Bakiye Yok', de: 'Kein Guthaben' } },
  { key: 'status.new', namespace: 'transactions', translations: { az: 'Yeni', en: 'New', ru: 'Новый', tr: 'Yeni', de: 'Neu' } },
  { key: 'status.insufficientFunds', namespace: 'transactions', translations: { az: 'Kifayət qədər vəsait yoxdur', en: 'Insufficient Funds', ru: 'Недостаточно средств', tr: 'Yetersiz Bakiye', de: 'Unzureichende Mittel' } },
  { key: 'status.deleted', namespace: 'transactions', translations: { az: 'Silinib', en: 'Deleted', ru: 'Удалено', tr: 'Silindi', de: 'Gelöscht' } },
  { key: 'status.unknown', namespace: 'transactions', translations: { az: 'Naməlum', en: 'Unknown', ru: 'Неизвестно', tr: 'Bilinmiyor', de: 'Unbekannt' } },
  // Transaction Type translations
  { key: 'type.magnet', namespace: 'transactions', translations: { az: 'Magnet', en: 'Magnet', ru: 'Магнит', tr: 'Mıknatıs', de: 'Magnet' } },
  { key: 'type.stream', namespace: 'transactions', translations: { az: 'Stream', en: 'Stream', ru: 'Поток', tr: 'Akış', de: 'Stream' } },
  { key: 'type.offline', namespace: 'transactions', translations: { az: 'Offline', en: 'Offline', ru: 'Офлайн', tr: 'Çevrimdışı', de: 'Offline' } },
  // Filter translations
  { key: 'filters', namespace: 'transactions', translations: { az: 'Filterlər', en: 'Filters', ru: 'Фильтры', tr: 'Filtreler', de: 'Filter' } },
  { key: 'searchPlaceholder', namespace: 'transactions', translations: { az: 'Axtarış (ID və ya Merchant)', en: 'Search (ID or Merchant)', ru: 'Поиск (ID или Торговец)', tr: 'Ara (ID veya Satıcı)', de: 'Suche (ID oder Händler)' } },
  { key: 'search', namespace: 'transactions', translations: { az: 'Axtarış...', en: 'Search...', ru: 'Поиск...', tr: 'Ara...', de: 'Suchen...' } },
  { key: 'allTypes', namespace: 'transactions', translations: { az: 'Bütün tiplər', en: 'All Types', ru: 'Все типы', tr: 'Tüm Tipler', de: 'Alle Typen' } },
  { key: 'allStatuses', namespace: 'transactions', translations: { az: 'Bütün statuslar', en: 'All Statuses', ru: 'Все статусы', tr: 'Tüm Durumlar', de: 'Alle Statusse' } },
  { key: 'allMerchants', namespace: 'transactions', translations: { az: 'Bütün merchantlar', en: 'All Merchants', ru: 'Все торговцы', tr: 'Tüm Satıcılar', de: 'Alle Händler' } },
  { key: 'allBanks', namespace: 'transactions', translations: { az: 'Bütün banklar', en: 'All Banks', ru: 'Все банки', tr: 'Tüm Bankalar', de: 'Alle Banken' } },
  { key: 'itemsSelected', namespace: 'transactions', translations: { az: '{0} element seçilib', en: '{0} items selected', ru: 'Выбрано элементов: {0}', tr: '{0} öğe seçildi', de: '{0} Elemente ausgewählt' } },
  { key: 'resetFilters', namespace: 'transactions', translations: { az: 'Filterləri sıfırla', en: 'Reset Filters', ru: 'Сбросить фильтры', tr: 'Filtreleri Sıfırla', de: 'Filter zurücksetzen' } },
  { key: 'exporting', namespace: 'transactions', translations: { az: 'Export edilir...', en: 'Exporting...', ru: 'Экспорт...', tr: 'Dışa aktarılıyor...', de: 'Wird exportiert...' } },
  { key: 'exportExcel', namespace: 'transactions', translations: { az: 'Excel export et', en: 'Export to Excel', ru: 'Экспорт в Excel', tr: 'Excel\'e Aktar', de: 'Nach Excel exportieren' } },
  { key: 'minAmount', namespace: 'transactions', translations: { az: 'Min məbləğ', en: 'Min Amount', ru: 'Минимальная сумма', tr: 'Min Tutar', de: 'Mindestbetrag' } },
  { key: 'maxAmount', namespace: 'transactions', translations: { az: 'Max məbləğ', en: 'Max Amount', ru: 'Максимальная сумма', tr: 'Max Tutar', de: 'Höchstbetrag' } },
  { key: 'startDate', namespace: 'transactions', translations: { az: 'Başlanğıc tarixi', en: 'Start Date', ru: 'Дата начала', tr: 'Başlangıç Tarihi', de: 'Startdatum' } },
  { key: 'endDate', namespace: 'transactions', translations: { az: 'Bitiş tarixi', en: 'End Date', ru: 'Дата окончания', tr: 'Bitiş Tarihi', de: 'Enddatum' } },
  { key: 'applyFilters', namespace: 'transactions', translations: { az: 'Filterləri tətbiq et', en: 'Apply Filters', ru: 'Применить фильтры', tr: 'Filtreleri Uygula', de: 'Filter anwenden' } },
  // Table headers
  { key: 'tableHeader.number', namespace: 'transactions', translations: { az: '№', en: '№', ru: '№', tr: '№', de: '№' } },
  { key: 'tableHeader.id', namespace: 'transactions', translations: { az: 'ID', en: 'ID', ru: 'ID', tr: 'ID', de: 'ID' } },
  { key: 'tableHeader.merchant', namespace: 'transactions', translations: { az: 'Merchant', en: 'Merchant', ru: 'Торговец', tr: 'Satıcı', de: 'Händler' } },
  { key: 'tableHeader.date', namespace: 'transactions', translations: { az: 'Tarix', en: 'Date', ru: 'Дата', tr: 'Tarih', de: 'Datum' } },
  { key: 'tableHeader.amount', namespace: 'transactions', translations: { az: 'Məbləğ', en: 'Amount', ru: 'Сумма', tr: 'Tutar', de: 'Betrag' } },
  { key: 'tableHeader.type', namespace: 'transactions', translations: { az: 'Tip', en: 'Type', ru: 'Тип', tr: 'Tür', de: 'Typ' } },
  { key: 'tableHeader.status', namespace: 'transactions', translations: { az: 'Status', en: 'Status', ru: 'Статус', tr: 'Durum', de: 'Status' } },

  // ========== EXPORTS NAMESPACE ==========
  { key: 'tableHeader.number', namespace: 'exports', translations: { az: '№', en: '№', ru: '№', tr: '№', de: '№' } },
  { key: 'tableHeader.fileName', namespace: 'exports', translations: { az: 'Fayl adı', en: 'File Name', ru: 'Имя файла', tr: 'Dosya Adı', de: 'Dateiname' } },
  { key: 'tableHeader.type', namespace: 'exports', translations: { az: 'Tip', en: 'Type', ru: 'Тип', tr: 'Tür', de: 'Typ' } },
  { key: 'tableHeader.creationDate', namespace: 'exports', translations: { az: 'Yaradılma tarixi', en: 'Creation Date', ru: 'Дата создания', tr: 'Oluşturulma Tarihi', de: 'Erstellungsdatum' } },
  { key: 'tableHeader.filterData', namespace: 'exports', translations: { az: 'Filter məlumatları', en: 'Filter Information', ru: 'Информация о фильтре', tr: 'Filtre Bilgileri', de: 'Filterinformationen' } },
  { key: 'tableHeader.operations', namespace: 'exports', translations: { az: 'Əməliyyatlar', en: 'Operations', ru: 'Операции', tr: 'İşlemler', de: 'Vorgänge' } },
  { key: 'tableHeader.status', namespace: 'exports', translations: { az: 'Status', en: 'Status', ru: 'Статус', tr: 'Durum', de: 'Status' } },
  { key: 'filters', namespace: 'exports', translations: { az: 'Filterlər', en: 'Filters', ru: 'Фильтры', tr: 'Filtreler', de: 'Filter' } },
  { key: 'system', namespace: 'exports', translations: { az: 'Sistem', en: 'System', ru: 'Система', tr: 'Sistem', de: 'System' } },
  { key: 'fileType', namespace: 'exports', translations: { az: 'Fayl tipi', en: 'File Type', ru: 'Тип файла', tr: 'Dosya Tipi', de: 'Dateityp' } },
  { key: 'allFileTypes', namespace: 'exports', translations: { az: 'Fayl tipi (hamısı)', en: 'File Type (All)', ru: 'Тип файла (все)', tr: 'Dosya Tipi (Tümü)', de: 'Dateityp (Alle)' } },
  { key: 'allStatuses', namespace: 'exports', translations: { az: 'Bütün statuslar', en: 'All Statuses', ru: 'Все статусы', tr: 'Tüm Durumlar', de: 'Alle Statusse' } },
  { key: 'resetFilters', namespace: 'exports', translations: { az: 'Filterləri sıfırla', en: 'Reset Filters', ru: 'Сбросить фильтры', tr: 'Filtreleri Sıfırla', de: 'Filter zurücksetzen' } },
  { key: 'applyFilters', namespace: 'exports', translations: { az: 'Filterləri tətbiq et', en: 'Apply Filters', ru: 'Применить фильтры', tr: 'Filtreleri Uygula', de: 'Filter anwenden' } },
  { key: 'noExportsFound', namespace: 'exports', translations: { az: 'Export tapılmadı', en: 'No exports found', ru: 'Экспорты не найдены', tr: 'Dışa aktarma bulunamadı', de: 'Keine Exporte gefunden' } },
  { key: 'download', namespace: 'exports', translations: { az: 'Yüklə', en: 'Download', ru: 'Скачать', tr: 'İndir', de: 'Herunterladen' } },
  { key: 'downloading', namespace: 'exports', translations: { az: 'Yüklənir...', en: 'Downloading...', ru: 'Загрузка...', tr: 'İndiriliyor...', de: 'Wird heruntergeladen...' } },
  { key: 'fileNotReady', namespace: 'exports', translations: { az: 'Fayl hələ hazır deyil', en: 'File is not ready yet', ru: 'Файл еще не готов', tr: 'Dosya henüz hazır değil', de: 'Datei ist noch nicht bereit' } },
  { key: 'status.preparing', namespace: 'exports', translations: { az: 'Hazırlanır', en: 'Preparing', ru: 'Подготовка', tr: 'Hazırlanıyor', de: 'Wird vorbereitet' } },
  { key: 'status.ready', namespace: 'exports', translations: { az: 'Hazırdır', en: 'Ready', ru: 'Готов', tr: 'Hazır', de: 'Bereit' } },
  { key: 'status.error', namespace: 'exports', translations: { az: 'Xəta', en: 'Error', ru: 'Ошибка', tr: 'Hata', de: 'Fehler' } },
  { key: 'status.unknown', namespace: 'exports', translations: { az: 'Naməlum', en: 'Unknown', ru: 'Неизвестно', tr: 'Bilinmiyor', de: 'Unbekannt' } },

  // ========== EXAMPLE NAMESPACE ==========
  { key: 'tableHeader.name', namespace: 'example', translations: { az: 'Adı', en: 'Name', ru: 'Имя', tr: 'Ad', de: 'Name' } },
  { key: 'tableHeader.code', namespace: 'example', translations: { az: 'Kodu', en: 'Code', ru: 'Код', tr: 'Kod', de: 'Code' } },

  // ========== USERS NAMESPACE ==========
  { key: 'username', namespace: 'users', translations: { az: 'İstifadəçi Adı', en: 'Username', ru: 'Имя пользователя', tr: 'Kullanıcı Adı', de: 'Benutzername' } },
  { key: 'email', namespace: 'users', translations: { az: 'Elektron poçt', en: 'Email', ru: 'Электронная почта', tr: 'E-posta', de: 'E-Mail' } },
  { key: 'deleteUser', namespace: 'users', translations: { az: 'İstifadəçini sil', en: 'Delete User', ru: 'Удалить пользователя', tr: 'Kullanıcıyı Sil', de: 'Benutzer löschen' } },
  { key: 'deleteUserConfirm', namespace: 'users', translations: { az: 'Bu istifadəçini silmək istədiyinizdən əminsiniz? Bu əməliyyat geri alına bilməz.', en: 'Are you sure you want to delete this user? This action cannot be undone.', ru: 'Вы уверены, что хотите удалить этого пользователя? Это действие нельзя отменить.', tr: 'Bu kullanıcıyı silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.', de: 'Sind Sie sicher, dass Sie diesen Benutzer löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden.' } },
  { key: 'delete', namespace: 'users', translations: { az: 'Sil', en: 'Delete', ru: 'Удалить', tr: 'Sil', de: 'Löschen' } },
  { key: 'cancel', namespace: 'users', translations: { az: 'Ləğv et', en: 'Cancel', ru: 'Отмена', tr: 'İptal', de: 'Abbrechen' } },

  // ========== LANGUAGE NAMES ==========
  { key: 'az', namespace: 'common', translations: { az: 'Azərbaycan', en: 'Azerbaijani', ru: 'Азербайджанский', tr: 'Azerbaycan', de: 'Aserbaidschanisch' } },
  { key: 'en', namespace: 'common', translations: { az: 'İngiliscə', en: 'English', ru: 'Английский', tr: 'İngilizce', de: 'Englisch' } },
  { key: 'ru', namespace: 'common', translations: { az: 'Rusca', en: 'Russian', ru: 'Русский', tr: 'Rusça', de: 'Russisch' } },
  { key: 'tr', namespace: 'common', translations: { az: 'Türkcə', en: 'Turkish', ru: 'Турецкий', tr: 'Türkçe', de: 'Türkisch' } },
  { key: 'de', namespace: 'common', translations: { az: 'Almanca', en: 'German', ru: 'Немецкий', tr: 'Almanca', de: 'Deutsch' } },
  
  // ========== TRANSACTIONS - Additional translations ==========
  { key: 'copy', namespace: 'transactions', translations: { az: 'Kopyala', en: 'Copy', ru: 'Копировать', tr: 'Kopyala', de: 'Kopieren' } },
  { key: 'copyReferenceId', namespace: 'transactions', translations: { az: 'Reference ID kopyalandı', en: 'Reference ID copied', ru: 'ID ссылки скопирован', tr: 'Referans ID kopyalandı', de: 'Referenz-ID kopiert' } },
  { key: 'copyError', namespace: 'transactions', translations: { az: 'Kopyalama xətası', en: 'Copy error', ru: 'Ошибка копирования', tr: 'Kopyalama hatası', de: 'Kopierfehler' } },
  { key: 'copyFinancialInfo', namespace: 'transactions', translations: { az: 'Maliyyə məlumatları kopyalandı', en: 'Financial information copied', ru: 'Финансовая информация скопирована', tr: 'Mali bilgiler kopyalandı', de: 'Finanzinformationen kopiert' } },
  { key: 'copyFinancialInfoTitle', namespace: 'transactions', translations: { az: 'Maliyyə məlumatlarını CSV formatında kopyala', en: 'Copy financial information in CSV format', ru: 'Копировать финансовую информацию в формате CSV', tr: 'Mali bilgileri CSV formatında kopyala', de: 'Finanzinformationen im CSV-Format kopieren' } },
  { key: 'copyReferenceIdTitle', namespace: 'transactions', translations: { az: 'Reference ID kopyala', en: 'Copy Reference ID', ru: 'Копировать ID ссылки', tr: 'Referans ID kopyala', de: 'Referenz-ID kopieren' } },
  { key: 'systemId', namespace: 'transactions', translations: { az: 'Sistem ID', en: 'System ID', ru: 'ID системы', tr: 'Sistem ID', de: 'System-ID' } },
  { key: 'close', namespace: 'transactions', translations: { az: 'Bağla', en: 'Close', ru: 'Закрыть', tr: 'Kapat', de: 'Schließen' } },
  { key: 'noTransactionsFound', namespace: 'transactions', translations: { az: 'Əməliyyat tapılmadı', en: 'No transactions found', ru: 'Транзакции не найдены', tr: 'İşlem bulunamadı', de: 'Keine Transaktionen gefunden' } },
  { key: 'exportError', namespace: 'transactions', translations: { az: 'Export sorğusu göndərilərkən xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.', en: 'An error occurred while sending the export request. Please try again.', ru: 'Произошла ошибка при отправке запроса на экспорт. Пожалуйста, попробуйте снова.', tr: 'Dışa aktarma isteği gönderilirken bir hata oluştu. Lütfen tekrar deneyin.', de: 'Beim Senden der Exportanfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.' } },
  { key: 'exportSuccess', namespace: 'transactions', translations: { az: 'Export sorğusu uğurla göndərildi! Exportlar səhifəsindən statusu yoxlaya bilərsiniz.', en: 'Export request sent successfully! You can check the status from the Exports page.', ru: 'Запрос на экспорт успешно отправлен! Вы можете проверить статус на странице Экспорты.', tr: 'Dışa aktarma isteği başarıyla gönderildi! Durumu Dışa Aktarma sayfasından kontrol edebilirsiniz.', de: 'Exportanfrage erfolgreich gesendet! Sie können den Status auf der Exportseite überprüfen.' } },
  
  // ========== EXPORTS - Additional translations ==========
  { key: 'downloadError', namespace: 'exports', translations: { az: 'Fayl yüklənərkən xəta baş verdi', en: 'An error occurred while downloading the file', ru: 'Произошла ошибка при загрузке файла', tr: 'Dosya indirilirken bir hata oluştu', de: 'Beim Herunterladen der Datei ist ein Fehler aufgetreten' } },
  { key: 'noExportsFoundMobile', namespace: 'exports', translations: { az: 'Export tapılmadı', en: 'No exports found', ru: 'Экспорты не найдены', tr: 'Dışa aktarma bulunamadı', de: 'Keine Exporte gefunden' } },
  { key: 'tableHeader.numberShort', namespace: 'exports', translations: { az: '№', en: '№', ru: '№', tr: '№', de: '№' } },
  { key: 'fileName', namespace: 'exports', translations: { az: 'Fayl adı', en: 'File Name', ru: 'Имя файла', tr: 'Dosya Adı', de: 'Dateiname' } },
  { key: 'type', namespace: 'exports', translations: { az: 'Tip', en: 'Type', ru: 'Тип', tr: 'Tür', de: 'Typ' } },
  { key: 'status', namespace: 'exports', translations: { az: 'Status', en: 'Status', ru: 'Статус', tr: 'Durum', de: 'Status' } },
  { key: 'creationDate', namespace: 'exports', translations: { az: 'Yaradılma tarixi', en: 'Creation Date', ru: 'Дата создания', tr: 'Oluşturulma Tarihi', de: 'Erstellungsdatum' } },
  { key: 'filterData', namespace: 'exports', translations: { az: 'Filter məlumatları', en: 'Filter Information', ru: 'Информация о фильтре', tr: 'Filtre Bilgileri', de: 'Filterinformationen' } },
  { key: 'download', namespace: 'exports', translations: { az: 'Yüklə', en: 'Download', ru: 'Скачать', tr: 'İndir', de: 'Herunterladen' } },
  { key: 'downloading', namespace: 'exports', translations: { az: 'Yüklənir...', en: 'Downloading...', ru: 'Загрузка...', tr: 'İndiriliyor...', de: 'Wird heruntergeladen...' } },
  { key: 'fileNotReady', namespace: 'exports', translations: { az: 'Fayl hələ hazır deyil', en: 'File is not ready yet', ru: 'Файл еще не готов', tr: 'Dosya henüz hazır değil', de: 'Datei ist noch nicht bereit' } },
  { key: 'unknown', namespace: 'exports', translations: { az: 'Naməlum', en: 'Unknown', ru: 'Неизвестно', tr: 'Bilinmiyor', de: 'Unbekannt' } },
  { key: 'startDate', namespace: 'exports', translations: { az: 'Başlanğıc tarixi', en: 'Start Date', ru: 'Дата начала', tr: 'Başlangıç Tarihi', de: 'Startdatum' } },
  { key: 'endDate', namespace: 'exports', translations: { az: 'Bitiş tarixi', en: 'End Date', ru: 'Дата окончания', tr: 'Bitiş Tarihi', de: 'Enddatum' } },
  
  // ========== PROFILE NAMESPACE ==========
  { key: 'profileInformation', namespace: 'profile', translations: { az: 'Profil Məlumatları', en: 'Profile Information', ru: 'Информация профиля', tr: 'Profil Bilgileri', de: 'Profilinformationen' } },
  { key: 'firstName', namespace: 'profile', translations: { az: 'Ad', en: 'First Name', ru: 'Имя', tr: 'Ad', de: 'Vorname' } },
  { key: 'lastName', namespace: 'profile', translations: { az: 'Soyad', en: 'Last Name', ru: 'Фамилия', tr: 'Soyad', de: 'Nachname' } },
  { key: 'domain', namespace: 'profile', translations: { az: 'Domain', en: 'Domain', ru: 'Домен', tr: 'Domain', de: 'Domain' } },
  { key: 'role', namespace: 'profile', translations: { az: 'Rol', en: 'Role', ru: 'Роль', tr: 'Rol', de: 'Rolle' } },
  { key: 'timezone', namespace: 'profile', translations: { az: 'Vaxt Zonası', en: 'Timezone', ru: 'Часовой пояс', tr: 'Saat Dilimi', de: 'Zeitzone' } },
  { key: 'profileUpdated', namespace: 'profile', translations: { az: 'Profil uğurla yeniləndi!', en: 'Profile updated successfully!', ru: 'Профиль успешно обновлен!', tr: 'Profil başarıyla güncellendi!', de: 'Profil erfolgreich aktualisiert!' } },
  { key: 'changePassword', namespace: 'profile', translations: { az: 'Şifrəni Dəyişdir', en: 'Change Password', ru: 'Изменить пароль', tr: 'Şifreyi Değiştir', de: 'Passwort ändern' } },
  { key: 'oldPassword', namespace: 'profile', translations: { az: 'Köhnə Şifrə', en: 'Old Password', ru: 'Старый пароль', tr: 'Eski Şifre', de: 'Altes Passwort' } },
  { key: 'oldPasswordPlaceholder', namespace: 'profile', translations: { az: 'Köhnə şifrəni daxil edin', en: 'Enter old password', ru: 'Введите старый пароль', tr: 'Eski şifreyi girin', de: 'Altes Passwort eingeben' } },
  { key: 'newPassword', namespace: 'profile', translations: { az: 'Yeni Şifrə', en: 'New Password', ru: 'Новый пароль', tr: 'Yeni Şifre', de: 'Neues Passwort' } },
  { key: 'newPasswordPlaceholder', namespace: 'profile', translations: { az: 'Yeni şifrəni daxil edin', en: 'Enter new password', ru: 'Введите новый пароль', tr: 'Yeni şifreyi girin', de: 'Neues Passwort eingeben' } },
  { key: 'confirmPassword', namespace: 'profile', translations: { az: 'Şifrəni Təsdiqlə', en: 'Confirm Password', ru: 'Подтвердите пароль', tr: 'Şifreyi Onayla', de: 'Passwort bestätigen' } },
  { key: 'confirmPasswordPlaceholder', namespace: 'profile', translations: { az: 'Yeni şifrəni təkrar daxil edin', en: 'Re-enter new password', ru: 'Повторно введите новый пароль', tr: 'Yeni şifreyi tekrar girin', de: 'Neues Passwort erneut eingeben' } },
  { key: 'passwordsDoNotMatch', namespace: 'profile', translations: { az: 'Yeni şifrələr uyğun gəlmir!', en: 'New passwords do not match!', ru: 'Новые пароли не совпадают!', tr: 'Yeni şifreler eşleşmiyor!', de: 'Neue Passwörter stimmen nicht überein!' } },
  { key: 'passwordMinLength', namespace: 'profile', translations: { az: 'Şifrə ən azı 6 simvoldan ibarət olmalıdır!', en: 'Password must be at least 6 characters long!', ru: 'Пароль должен содержать не менее 6 символов!', tr: 'Şifre en az 6 karakter olmalıdır!', de: 'Das Passwort muss mindestens 6 Zeichen lang sein!' } },
  { key: 'passwordChanged', namespace: 'profile', translations: { az: 'Şifrə uğurla dəyişdirildi!', en: 'Password changed successfully!', ru: 'Пароль успешно изменен!', tr: 'Şifre başarıyla değiştirildi!', de: 'Passwort erfolgreich geändert!' } },
  { key: 'save', namespace: 'profile', translations: { az: 'Yadda saxla', en: 'Save', ru: 'Сохранить', tr: 'Kaydet', de: 'Speichern' } },
  { key: 'changePasswordButton', namespace: 'profile', translations: { az: 'Şifrəni Dəyişdir', en: 'Change Password', ru: 'Изменить пароль', tr: 'Şifreyi Değiştir', de: 'Passwort ändern' } },
  
  // ========== COMMON - Toast messages ==========
  { key: 'dataCreated', namespace: 'common', translations: { az: 'Məlumat uğurla yaradıldı!', en: 'Data created successfully!', ru: 'Данные успешно созданы!', tr: 'Veri başarıyla oluşturuldu!', de: 'Daten erfolgreich erstellt!' } },
  { key: 'dataUpdated', namespace: 'common', translations: { az: 'Məlumat uğurla yeniləndi!', en: 'Data updated successfully!', ru: 'Данные успешно обновлены!', tr: 'Veri başarıyla güncellendi!', de: 'Daten erfolgreich aktualisiert!' } },
  { key: 'dataDeleted', namespace: 'common', translations: { az: 'Məlumat uğurla silindi!', en: 'Data deleted successfully!', ru: 'Данные успешно удалены!', tr: 'Veri başarıyla silindi!', de: 'Daten erfolgreich gelöscht!' } },
  { key: 'errorOccurred', namespace: 'common', translations: { az: 'Xəta baş verdi!', en: 'An error occurred!', ru: 'Произошла ошибка!', tr: 'Bir hata oluştu!', de: 'Ein Fehler ist aufgetreten!' } },
  { key: 'filtersApplied', namespace: 'common', translations: { az: 'Filterlər tətbiq olundu', en: 'Filters applied', ru: 'Фильтры применены', tr: 'Filtreler uygulandı', de: 'Filter angewendet' } },
  { key: 'filterDataLoadError', namespace: 'common', translations: { az: 'Filter məlumatları yüklənmədi. Zəhmət olmasa yenidən cəhd edin.', en: 'Filter data could not be loaded. Please try again.', ru: 'Не удалось загрузить данные фильтра. Пожалуйста, попробуйте снова.', tr: 'Filtre verileri yüklenemedi. Lütfen tekrar deneyin.', de: 'Filterdaten konnten nicht geladen werden. Bitte versuchen Sie es erneut.' } },
  
  // ========== ACQUIRING NAMESPACE ==========
  { key: 'filters', namespace: 'acquiring', translations: { az: 'Filterlər', en: 'Filters', ru: 'Фильтры', tr: 'Filtreler', de: 'Filter' } },
  { key: 'searchPlaceholder', namespace: 'acquiring', translations: { az: 'Axtarış (agent, kateqoriya, xidmət)', en: 'Search (agent, category, service)', ru: 'Поиск (агент, категория, услуга)', tr: 'Ara (ajan, kategori, hizmet)', de: 'Suchen (Agent, Kategorie, Service)' } },
  { key: 'agents', namespace: 'acquiring', translations: { az: 'Agentlər', en: 'Agents', ru: 'Агенты', tr: 'Ajanlar', de: 'Agenten' } },
  { key: 'noAgentsFound', namespace: 'acquiring', translations: { az: 'Agent tapılmadı', en: 'No agents found', ru: 'Агенты не найдены', tr: 'Ajan bulunamadı', de: 'Keine Agenten gefunden' } },
  { key: 'categories', namespace: 'acquiring', translations: { az: 'Kateqoriyalar', en: 'Categories', ru: 'Категории', tr: 'Kategoriler', de: 'Kategorien' } },
  { key: 'noCategoriesFound', namespace: 'acquiring', translations: { az: 'Kateqoriya tapılmadı', en: 'No categories found', ru: 'Категории не найдены', tr: 'Kategori bulunamadı', de: 'Keine Kategorien gefunden' } },
  { key: 'services', namespace: 'acquiring', translations: { az: 'Xidmətlər', en: 'Services', ru: 'Услуги', tr: 'Hizmetler', de: 'Dienste' } },
  { key: 'noServicesFound', namespace: 'acquiring', translations: { az: 'Xidmət tapılmadı', en: 'No services found', ru: 'Услуги не найдены', tr: 'Hizmet bulunamadı', de: 'Keine Dienste gefunden' } },
  { key: 'statuses', namespace: 'acquiring', translations: { az: 'Statuslar', en: 'Statuses', ru: 'Статусы', tr: 'Durumlar', de: 'Statusse' } },
  { key: 'active', namespace: 'acquiring', translations: { az: 'Aktiv', en: 'Active', ru: 'Активный', tr: 'Aktif', de: 'Aktiv' } },
  { key: 'inactive', namespace: 'acquiring', translations: { az: 'Deaktiv', en: 'Inactive', ru: 'Неактивный', tr: 'Pasif', de: 'Inaktiv' } },
  { key: 'startDate', namespace: 'acquiring', translations: { az: 'Başlanğıc tarix', en: 'Start Date', ru: 'Дата начала', tr: 'Başlangıç Tarihi', de: 'Startdatum' } },
  { key: 'endDate', namespace: 'acquiring', translations: { az: 'Bitiş tarix', en: 'End Date', ru: 'Дата окончания', tr: 'Bitiş Tarihi', de: 'Enddatum' } },
  { key: 'resetFilters', namespace: 'acquiring', translations: { az: 'Filterləri sıfırla', en: 'Reset Filters', ru: 'Сбросить фильтры', tr: 'Filtreleri Sıfırla', de: 'Filter zurücksetzen' } },
  { key: 'applyFilters', namespace: 'acquiring', translations: { az: 'Filterləri tətbiq et', en: 'Apply Filters', ru: 'Применить фильтры', tr: 'Filtreleri Uygula', de: 'Filter anwenden' } },
  { key: 'appliedFilters', namespace: 'acquiring', translations: { az: 'Tətbiq olunmuş filterlər', en: 'Applied Filters', ru: 'Примененные фильтры', tr: 'Uygulanan Filtreler', de: 'Angewendete Filter' } },
  { key: 'forAcquiringPage', namespace: 'acquiring', translations: { az: 'Acquiring səhifəsi üçün', en: 'For Acquiring page', ru: 'Для страницы Acquiring', tr: 'Acquiring sayfası için', de: 'Für Acquiring-Seite' } },
  { key: 'search', namespace: 'acquiring', translations: { az: 'Axtarış', en: 'Search', ru: 'Поиск', tr: 'Ara', de: 'Suche' } },
  { key: 'agent', namespace: 'acquiring', translations: { az: 'Agent', en: 'Agent', ru: 'Агент', tr: 'Ajan', de: 'Agent' } },
  { key: 'category', namespace: 'acquiring', translations: { az: 'Kateqoriya', en: 'Category', ru: 'Категория', tr: 'Kategori', de: 'Kategorie' } },
  { key: 'service', namespace: 'acquiring', translations: { az: 'Xidmət', en: 'Service', ru: 'Услуга', tr: 'Hizmet', de: 'Service' } },
  { key: 'status', namespace: 'acquiring', translations: { az: 'Status', en: 'Status', ru: 'Статус', tr: 'Durum', de: 'Status' } },
  { key: 'dateRange', namespace: 'acquiring', translations: { az: 'Tarix intervalı', en: 'Date Range', ru: 'Диапазон дат', tr: 'Tarih Aralığı', de: 'Datumsbereich' } },
  { key: 'emptyList', namespace: 'acquiring', translations: { az: 'Agent siyahısı boşdur', en: 'Agent list is empty', ru: 'Список агентов пуст', tr: 'Ajan listesi boş', de: 'Agentenliste ist leer' } },
  { key: 'itemsSelected', namespace: 'acquiring', translations: { az: '{0} element seçilib', en: '{0} items selected', ru: 'Выбрано элементов: {0}', tr: '{0} öğe seçildi', de: '{0} Elemente ausgewählt' } },
  
  // ========== DATETIMEPICKER NAMESPACE ==========
  { key: 'previousMonth', namespace: 'datetimepicker', translations: { az: 'Əvvəlki ay', en: 'Previous month', ru: 'Предыдущий месяц', tr: 'Önceki ay', de: 'Vorheriger Monat' } },
  { key: 'nextMonth', namespace: 'datetimepicker', translations: { az: 'Növbəti ay', en: 'Next month', ru: 'Следующий месяц', tr: 'Sonraki ay', de: 'Nächster Monat' } },
  { key: 'openPreviousView', namespace: 'datetimepicker', translations: { az: 'Əvvəlki görünüş', en: 'Previous view', ru: 'Предыдущий вид', tr: 'Önceki görünüm', de: 'Vorherige Ansicht' } },
  { key: 'openNextView', namespace: 'datetimepicker', translations: { az: 'Növbəti görünüş', en: 'Next view', ru: 'Следующий вид', tr: 'Sonraki görünüm', de: 'Nächste Ansicht' } },
  { key: 'calendarViewSwitchingButtonAriaLabel', namespace: 'datetimepicker', translations: { az: 'təqvim görünüşü açıqdır, il görünüşünə keçin', en: 'calendar view is open, switch to year view', ru: 'открыт вид календаря, переключиться на вид года', tr: 'takvim görünümü açık, yıl görünümüne geç', de: 'Kalenderansicht ist geöffnet, zu Jahresansicht wechseln' } },
  { key: 'yearViewSwitchingButtonAriaLabel', namespace: 'datetimepicker', translations: { az: 'il görünüşü açıqdır, təqvim görünüşünə keçin', en: 'year view is open, switch to calendar view', ru: 'открыт вид года, переключиться на вид календаря', tr: 'yıl görünümü açık, takvim görünümüne geç', de: 'Jahresansicht ist geöffnet, zu Kalenderansicht wechseln' } },
  { key: 'start', namespace: 'datetimepicker', translations: { az: 'Başlanğıc', en: 'Start', ru: 'Начало', tr: 'Başlangıç', de: 'Start' } },
  { key: 'end', namespace: 'datetimepicker', translations: { az: 'Bitiş', en: 'End', ru: 'Конец', tr: 'Bitiş', de: 'Ende' } },
  { key: 'cancel', namespace: 'datetimepicker', translations: { az: 'Ləğv et', en: 'Cancel', ru: 'Отмена', tr: 'İptal', de: 'Abbrechen' } },
  { key: 'clear', namespace: 'datetimepicker', translations: { az: 'Təmizlə', en: 'Clear', ru: 'Очистить', tr: 'Temizle', de: 'Löschen' } },
  { key: 'ok', namespace: 'datetimepicker', translations: { az: 'Təsdiq et', en: 'OK', ru: 'ОК', tr: 'Tamam', de: 'OK' } },
  { key: 'today', namespace: 'datetimepicker', translations: { az: 'Bu gün', en: 'Today', ru: 'Сегодня', tr: 'Bugün', de: 'Heute' } },
  { key: 'datePickerToolbarTitle', namespace: 'datetimepicker', translations: { az: 'Tarix seçin', en: 'Select date', ru: 'Выберите дату', tr: 'Tarih seçin', de: 'Datum auswählen' } },
  { key: 'timePickerToolbarTitle', namespace: 'datetimepicker', translations: { az: 'Saat seçin', en: 'Select time', ru: 'Выберите время', tr: 'Saat seçin', de: 'Zeit auswählen' } },
  { key: 'dateTimePickerToolbarTitle', namespace: 'datetimepicker', translations: { az: 'Tarix və saat seçin', en: 'Select date and time', ru: 'Выберите дату и время', tr: 'Tarih ve saat seçin', de: 'Datum und Zeit auswählen' } },
  { key: 'year', namespace: 'datetimepicker', translations: { az: 'İl', en: 'Year', ru: 'Год', tr: 'Yıl', de: 'Jahr' } },
  { key: 'month', namespace: 'datetimepicker', translations: { az: 'Ay', en: 'Month', ru: 'Месяц', tr: 'Ay', de: 'Monat' } },
  { key: 'day', namespace: 'datetimepicker', translations: { az: 'Gün', en: 'Day', ru: 'День', tr: 'Gün', de: 'Tag' } },
  { key: 'hours', namespace: 'datetimepicker', translations: { az: 'Saat', en: 'Hours', ru: 'Часы', tr: 'Saat', de: 'Stunden' } },
  { key: 'minutes', namespace: 'datetimepicker', translations: { az: 'Dəqiqə', en: 'Minutes', ru: 'Минуты', tr: 'Dakika', de: 'Minuten' } },
  { key: 'seconds', namespace: 'datetimepicker', translations: { az: 'Saniyə', en: 'Seconds', ru: 'Секунды', tr: 'Saniye', de: 'Sekunden' } },
  { key: 'meridiem', namespace: 'datetimepicker', translations: { az: 'AM/PM', en: 'AM/PM', ru: 'AM/PM', tr: 'AM/PM', de: 'AM/PM' } },
];

async function seedTranslations() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');

  console.log('Compiling Strapi...');
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();

  app.log.level = 'error';

  console.log('Seeding translations - one entry per key+namespace with all languages...\n');

  let created = 0;
  let updated = 0;
  let errors = 0;

  for (const { key, namespace, translations: trans } of translationData) {
    try {
      // Check if entry already exists
      const existing = await app.entityService.findMany('api::translation.translation', {
        filters: {
          key,
          namespace,
        },
      });

      // Prepare data with all language values
      const translationEntry = {
        key,
        namespace,
        value_az: trans.az || '',
        value_en: trans.en || '',
        value_ru: trans.ru || '',
        value_tr: trans.tr || '',
        value_de: trans.de || '',
        publishedAt: new Date(),
      };

      if (existing.length === 0) {
        // Create new entry - only if it doesn't exist
        const createdEntry = await app.entityService.create('api::translation.translation', {
          data: translationEntry,
        });
        // Publish the entry using document service
        try {
          await app.documents('api::translation.translation').publish({ id: createdEntry.id });
        } catch (publishError) {
          // If document service doesn't work, try setting publishedAt directly
          await app.entityService.update('api::translation.translation', createdEntry.id, {
            data: { publishedAt: new Date() },
          });
        }
        console.log(`✓ Created and published: ${namespace}.${key} (all languages)`);
        created++;
      } else {
        // Entry exists - preserve it (don't overwrite manual changes)
        // To update existing entries, you would need to explicitly enable that option
        console.log(`⊘ Skipped (preserved): ${namespace}.${key} - entry already exists`);
        updated++;
      }
    } catch (error) {
      console.error(`✗ Error creating ${namespace}.${key}:`, error.message);
      errors++;
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Created: ${created}`);
  console.log(`Preserved (skipped): ${updated}`);
  console.log(`Errors: ${errors}`);
  console.log(`Total entries: ${translationData.length}`);
  console.log('\nTranslation seeding completed!');
  console.log('Note: Existing entries were preserved to prevent overwriting manual changes.');

  await app.destroy();
  process.exit(0);
}

// Export translationData for use in bootstrap
if (typeof module !== 'undefined' && module.exports) {
  module.exports.translationData = translationData;
}

// Only run if called directly (not when imported)
if (require.main === module) {
  seedTranslations().catch((error) => {
    console.error('Seeding failed:', error);
    process.exit(1);
  });
}
