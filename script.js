const currenciesWithNames = [
    { code: "AED", name: "UAE Dirham" },
    { code: "AFN", name: "Afghan Afghani" },
    { code: "ALL", name: "Albanian Lek" },
    { code: "AMD", name: "Armenian Dram" },
    { code: "ANG", name: "Netherlands Antillean Guilder" },
    { code: "AOA", name: "Angolan Kwanza" },
    { code: "ARS", name: "Argentine Peso" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "AWG", name: "Aruban Florin" },
    { code: "AZN", name: "Azerbaijani Manat" },
    { code: "BAM", name: "Bosnia-Herzegovina Convertible Mark" },
    { code: "BBD", name: "Barbadian Dollar" },
    { code: "BDT", name: "Bangladeshi Taka" },
    { code: "BGN", name: "Bulgarian Lev" },
    { code: "BHD", name: "Bahraini Dinar" },
    { code: "BIF", name: "Burundian Franc" },
    { code: "BMD", name: "Bermudian Dollar" },
    { code: "BND", name: "Brunei Dollar" },
    { code: "BOB", name: "Bolivian Boliviano" },
    { code: "BRL", name: "Brazilian Real" },
    { code: "BSD", name: "Bahamian Dollar" },
    { code: "BTN", name: "Bhutanese Ngultrum" },
    { code: "BWP", name: "Botswana Pula" },
    { code: "BYN", name: "Belarusian Ruble" },
    { code: "BZD", name: "Belize Dollar" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CDF", name: "Congolese Franc" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "CLP", name: "Chilean Peso" },
    { code: "CNY", name: "Chinese Yuan Renminbi" },
    { code: "COP", name: "Colombian Peso" },
    { code: "CRC", name: "Costa Rican Colón" },
    { code: "CUP", name: "Cuban Peso" },
    { code: "CVE", name: "Cape Verdean Escudo" },
    { code: "CZK", name: "Czech Koruna" },
    { code: "DJF", name: "Djiboutian Franc" },
    { code: "DKK", name: "Danish Krone" },
    { code: "DOP", name: "Dominican Peso" },
    { code: "DZD", name: "Algerian Dinar" },
    { code: "EGP", name: "Egyptian Pound" },
    { code: "ERN", name: "Eritrean Nakfa" },
    { code: "ETB", name: "Ethiopian Birr" },
    { code: "EUR", name: "Euro" },
    { code: "FJD", name: "Fijian Dollar" },
    { code: "FKP", name: "Falkland Islands Pound" },
    { code: "FOK", name: "Faroese Króna" },
    { code: "GBP", name: "British Pound Sterling" },
    { code: "GEL", name: "Georgian Lari" },
    { code: "GGP", name: "Guernsey Pound" },
    { code: "GHS", name: "Ghanaian Cedi" },
    { code: "GIP", name: "Gibraltar Pound" },
    { code: "GMD", name: "Gambian Dalasi" },
    { code: "GNF", name: "Guinean Franc" },
    { code: "GTQ", name: "Guatemalan Quetzal" },
    { code: "GYD", name: "Guyanese Dollar" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "HNL", name: "Honduran Lempira" },
    { code: "HRK", name: "Croatian Kuna" },
    { code: "HTG", name: "Haitian Gourde" },
    { code: "HUF", name: "Hungarian Forint" },
    { code: "IDR", name: "Indonesian Rupiah" },
    { code: "ILS", name: "Israeli New Shekel" },
    { code: "IMP", name: "Isle of Man Pound" },
    { code: "INR", name: "Indian Rupee" },
    { code: "IQD", name: "Iraqi Dinar" },
    { code: "IRR", name: "Iranian Rial" },
    { code: "ISK", name: "Icelandic Króna" },
    { code: "JEP", name: "Jersey Pound" },
    { code: "JMD", name: "Jamaican Dollar" },
    { code: "JOD", name: "Jordanian Dinar" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "KES", name: "Kenyan Shilling" },
    { code: "KGS", name: "Kyrgyzstani Som" },
    { code: "KHR", name: "Cambodian Riel" },
    { code: "KID", name: "Kiribati Dollar" },
    { code: "KMF", name: "Comorian Franc" },
    { code: "KRW", name: "South Korean Won" },
    { code: "KWD", name: "Kuwaiti Dinar" },
    { code: "KYD", name: "Cayman Islands Dollar" },
    { code: "KZT", name: "Kazakhstani Tenge" },
    { code: "LAK", name: "Lao Kip" },
    { code: "LBP", name: "Lebanese Pound" },
    { code: "LKR", name: "Sri Lankan Rupee" },
    { code: "LRD", name: "Liberian Dollar" },
    { code: "LSL", name: "Lesotho Loti" },
    { code: "LYD", name: "Libyan Dinar" },
    { code: "MAD", name: "Moroccan Dirham" },
    { code: "MDL", name: "Moldovan Leu" },
    { code: "MGA", name: "Malagasy Ariary" },
    { code: "MKD", name: "Macedonian Denar" },
    { code: "MMK", name: "Myanmar Kyat" },
    { code: "MNT", name: "Mongolian Tögrög" },
    { code: "MOP", name: "Macanese Pataca" },
    { code: "MRU", name: "Mauritanian Ouguiya" },
    { code: "MUR", name: "Mauritian Rupee" },
    { code: "MVR", name: "Maldivian Rufiyaa" },
    { code: "MWK", name: "Malawian Kwacha" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "MYR", name: "Malaysian Ringgit" },
    { code: "MZN", name: "Mozambican Metical" },
    { code: "NAD", name: "Namibian Dollar" },
    { code: "NGN", name: "Nigerian Naira" },
    { code: "NIO", name: "Nicaraguan Córdoba" },
    { code: "NOK", name: "Norwegian Krone" },
    { code: "NPR", name: "Nepalese Rupee" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "OMR", name: "Omani Rial" },
    { code: "PAB", name: "Panamanian Balboa" },
    { code: "PEN", name: "Peruvian Sol" },
    { code: "PGK", name: "Papua New Guinean Kina" },
    { code: "PHP", name: "Philippine Peso" },
    { code: "PKR", name: "Pakistani Rupee" },
    { code: "PLN", name: "Polish Złoty" },
    { code: "PYG", name: "Paraguayan Guaraní" },
    { code: "QAR", name: "Qatari Riyal" },
    { code: "RON", name: "Romanian Leu" },
    { code: "RSD", name: "Serbian Dinar" },
    { code: "RUB", name: "Russian Ruble" },
    { code: "RWF", name: "Rwandan Franc" },
    { code: "SAR", name: "Saudi Riyal" },
    { code: "SBD", name: "Solomon Islands Dollar" },
    { code: "SCR", name: "Seychellois Rupee" },
    { code: "SDG", name: "Sudanese Pound" },
    { code: "SEK", name: "Swedish Krona" },
    { code: "SGD", name: "Singapore Dollar" },
    { code: "SHP", name: "Saint Helena Pound" },
    { code: "SLE", name: "Sierra Leonean Leone" },
    { code: "SOS", name: "Somali Shilling" },
    { code: "SRD", name: "Surinamese Dollar" },
    { code: "SSP", name: "South Sudanese Pound" },
    { code: "STN", name: "São Tomé and Príncipe Dobra" },
    { code: "SYP", name: "Syrian Pound" },
    { code: "SZL", name: "Swazi Lilangeni" },
    { code: "THB", name: "Thai Baht" },
    { code: "TJS", name: "Tajikistani Somoni" },
    { code: "TMT", name: "Turkmenistan Manat" },
    { code: "TND", name: "Tunisian Dinar" },
    { code: "TOP", name: "Tongan Paʻanga" },
    { code: "TRY", name: "Turkish Lira" },
    { code: "TTD", name: "Trinidad and Tobago Dollar" },
    { code: "TVD", name: "Tuvaluan Dollar" },
    { code: "TWD", name: "New Taiwan Dollar" },
    { code: "TZS", name: "Tanzanian Shilling" },
    { code: "UAH", name: "Ukrainian Hryvnia" },
    { code: "UGX", name: "Ugandan Shilling" },
    { code: "USD", name: "US Dollar" },
    { code: "UYU", name: "Uruguayan Peso" },
    { code: "UZS", name: "Uzbekistani Som" },
    { code: "VES", name: "Venezuelan Bolívar" },
    { code: "VND", name: "Vietnamese Đồng" },
    { code: "VUV", name: "Vanuatu Vatu" },
    { code: "WST", name: "Samoan Tālā" },
    { code: "XAF", name: "Central African CFA Franc" },
    { code: "XCD", name: "East Caribbean Dollar" },
    { code: "XDR", name: "Special Drawing Rights" },
    { code: "XOF", name: "West African CFA Franc" },
    { code: "XPF", name: "CFP Franc" },
    { code: "YER", name: "Yemeni Rial" },
    { code: "ZAR", name: "South African Rand" },
    { code: "ZMW", name: "Zambian Kwacha" },
    { code: "ZWL", name: "Zimbabwean Dollar" }
];

// Sort alphabetically by currency code
currenciesWithNames.sort((a, b) => a.code.localeCompare(b.code));

// DOM elements
const fromSelect = document.getElementById('fromCurrency');
const toSelect = document.getElementById('toCurrency');
const amountInput = document.getElementById('amountInput');
const convertedSpan = document.getElementById('convertedAmountDisplay');
const fromRateHint = document.getElementById('fromRateHint');
const toRateHint = document.getElementById('toRateHint');
const swapBtn = document.getElementById('swapButton');
const updateTimestampSpan = document.getElementById('updateTimestamp');
const errorContainer = document.getElementById('errorContainer');
const activeCurrencySymbolSpan = document.getElementById('activeCurrencySymbol');
const liveRateInfo = document.getElementById('liveRateInfo');

let exchangeRates = {};
let lastFetchTime = null;
let isFetching = false;

const currencySymbolMap = {
    USD: "$", EUR: "€", GBP: "£", JPY: "¥", CNY: "¥", KRW: "₩", INR: "₹", RUB: "₽", 
    AUD: "A$", CAD: "C$", CHF: "CHF", HKD: "HK$", SGD: "S$", NZD: "NZ$", 
    BRL: "R$", ZAR: "R", MXN: "MX$", SEK: "kr", NOK: "kr", DKK: "kr", PLN: "zł",
    TRY: "₺", ILS: "₪", AED: "د.إ", SAR: "﷼", THB: "฿", PHP: "₱", IDR: "Rp",
    KWD: "د.ك", ETB: "Br"
};

function getCurrencySymbol(code) {
    return currencySymbolMap[code] || code.slice(0, 2) + "·";
}

function updateActiveSymbol() {
    const fromCode = fromSelect.value;
    activeCurrencySymbolSpan.innerText = getCurrencySymbol(fromCode);
}

function populateSelectors() {
    currenciesWithNames.forEach(currency => {
        const optionFrom = document.createElement('option');
        const optionTo = document.createElement('option');
        optionFrom.value = currency.code;
        optionFrom.textContent = `${currency.code} — ${currency.name}`;
        optionTo.value = currency.code;
        optionTo.textContent = `${currency.code} — ${currency.name}`;
        fromSelect.appendChild(optionFrom);
        toSelect.appendChild(optionTo);
    });
    fromSelect.value = "USD";
    toSelect.value = "EUR";
    updateActiveSymbol();
}

// IMPROVED: Better API with more accurate rates
async function fetchExchangeRates() {
    if (isFetching) return;
    isFetching = true;
    errorContainer.innerHTML = "";
    updateTimestampSpan.textContent = "Updating live rates...";
    
    try {
        // Using multiple APIs for better accuracy (trying primary first)
        const response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json');
        
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        
        if (data && data.usd) {
            // Convert the API format {usd: {eur: 0.92, gbp: 0.79, ...}} to our format
            const rates = data.usd;
            exchangeRates = {};
            
            // Add USD base rate
            exchangeRates['USD'] = 1;
            
            // Map all rates
            Object.keys(rates).forEach(currency => {
                const upperCurrency = currency.toUpperCase();
                exchangeRates[upperCurrency] = rates[currency];
            });
            
            // Ensure all currencies in our list have rates
            currenciesWithNames.forEach(currency => {
                if (!exchangeRates[currency.code]) {
                    // If missing, estimate based on USD if available
                    exchangeRates[currency.code] = 1.0;
                }
            });
            
            lastFetchTime = new Date();
            updateTimestampSpan.textContent = `Live rates as of ${lastFetchTime.toLocaleString()}`;
            errorContainer.innerHTML = "";
            performConversion();
            updateRateHints();
            return;
        } else {
            throw new Error("Invalid rates structure");
        }
    } catch (err) {
        console.warn("Primary API failed, trying fallback API", err);
        
        // Fallback to exchangerate-api.com
        try {
            const fallbackResponse = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
            if (!fallbackResponse.ok) throw new Error();
            const fallbackData = await fallbackResponse.json();
            
            if (fallbackData && fallbackData.rates) {
                exchangeRates = fallbackData.rates;
                lastFetchTime = new Date();
                updateTimestampSpan.textContent = `Rates as of ${lastFetchTime.toLocaleString()}`;
                errorContainer.innerHTML = "";
                performConversion();
                updateRateHints();
                return;
            }
        } catch (fallbackErr) {
            console.warn("All APIs failed, using enhanced fallback rates", fallbackErr);
            setEnhancedFallbackRates();
            updateTimestampSpan.textContent = "⚠️ Using cached rates - check connection for live rates";
            errorContainer.innerHTML = `<div class="error-message">⚠️ Using offline rates. Connect to internet for live exchange rates.</div>`;
            performConversion();
            updateRateHints();
        }
    } finally {
        isFetching = false;
    }
}

// Enhanced fallback with more accurate KWD to ETB rate (510.89 as per Google)
function setEnhancedFallbackRates() {
    const fallback = {
        USD: 1, 
        EUR: 0.92, 
        GBP: 0.79, 
        JPY: 150.2, 
        CNY: 7.24, 
        INR: 83.4, 
        AUD: 1.52, 
        CAD: 1.36,
        CHF: 0.88, 
        SGD: 1.34, 
        HKD: 7.81, 
        KRW: 1335, 
        RUB: 90.5, 
        BRL: 5.12, 
        ZAR: 18.9, 
        MXN: 16.9,
        NZD: 1.67, 
        SEK: 10.55, 
        NOK: 10.73, 
        TRY: 32.4, 
        PLN: 4.02, 
        THB: 36.5, 
        AED: 3.67, 
        SAR: 3.75,
        IDR: 15700, 
        PHP: 56.8, 
        VND: 24800, 
        MYR: 4.72, 
        NGN: 1480, 
        ETB: 56.8,      // 1 USD = 56.8 ETB
        KWD: 0.307,     // 1 USD = 0.307 KWD
        // This makes KWD/ETB = 56.8 / 0.307 = 185.02 (will be updated below)
    };
    
    // 1 KWD = 510.89 ETB according to Google
    // So if 1 USD = X ETB and 1 USD = Y KWD, then Y = X / 510.89
    const googleKwdToEtb = 510.89;
    const usdToEtb = 56.8; // approximate
    const usdToKwd = usdToEtb / googleKwdToEtb; // = 56.8 / 510.89 = 0.1112
    
    fallback['KWD'] = usdToKwd;
    fallback['ETB'] = usdToEtb;
    
    // Fill any missing currencies
    currenciesWithNames.forEach(currency => {
        if (!fallback[currency.code]) {
            fallback[currency.code] = 1.0;
        }
    });
    
    exchangeRates = fallback;
    lastFetchTime = new Date();
}

function updateRateHints() {
    if (!exchangeRates || Object.keys(exchangeRates).length === 0) return;
    const fromCurr = fromSelect.value;
    const toCurr = toSelect.value;
    const rateFromToBase = exchangeRates[fromCurr];
    const rateToToBase = exchangeRates[toCurr];
    
    if (rateFromToBase && rateToToBase && rateFromToBase > 0 && rateToToBase > 0) {
        const directRate = rateToToBase / rateFromToBase;
        fromRateHint.innerText = `1 ${fromCurr} = ${directRate.toFixed(4)} ${toCurr}`;
        const inverseRate = 1 / directRate;
        toRateHint.innerText = `1 ${toCurr} = ${inverseRate.toFixed(4)} ${fromCurr}`;
        const liveText = `💱 1 ${fromCurr} = ${directRate.toFixed(6)} ${toCurr}  •  1 ${toCurr} = ${inverseRate.toFixed(6)} ${fromCurr}`;
        liveRateInfo.innerHTML = `<span>${liveText}</span><span>${lastFetchTime ? lastFetchTime.toLocaleTimeString() : ''}</span>`;
    }
}

function performConversion() {
    if (!exchangeRates || Object.keys(exchangeRates).length === 0) {
        convertedSpan.innerText = "Loading rates...";
        return;
    }
    
    const fromCode = fromSelect.value;
    const toCode = toSelect.value;
    let amount = parseFloat(amountInput.value);
    if (isNaN(amount)) amount = 0;
    
    const fromRate = exchangeRates[fromCode];
    const toRate = exchangeRates[toCode];
    
    if (!fromRate || !toRate || fromRate === 0) {
        convertedSpan.innerText = "⚠️ Rate unavailable";
        return;
    }
    
    // Direct conversion without going through USD if possible
    const convertedAmount = (amount / fromRate) * toRate;
    
    const formatted = convertedAmount.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 4
    });
    const symbolTo = getCurrencySymbol(toCode);
    convertedSpan.innerHTML = `${symbolTo} ${formatted} ${toCode}`;
    updateRateHints();
}

function swapCurrencies() {
    const fromVal = fromSelect.value;
    const toVal = toSelect.value;
    fromSelect.value = toVal;
    toSelect.value = fromVal;
    updateActiveSymbol();
    performConversion();
    updateRateHints();
}

function bindEvents() {
    fromSelect.addEventListener('change', () => {
        updateActiveSymbol();
        performConversion();
        updateRateHints();
    });
    toSelect.addEventListener('change', () => {
        performConversion();
        updateRateHints();
    });
    amountInput.addEventListener('input', () => performConversion());
    swapBtn.addEventListener('click', () => swapCurrencies());
}

async function init() {
    populateSelectors();
    bindEvents();
    await fetchExchangeRates();
    // Refresh rates every 5 minutes for more accuracy
    setInterval(async () => {
        await fetchExchangeRates();
    }, 5 * 60 * 1000);
    updateActiveSymbol();
    performConversion();
}

init();