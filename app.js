const text = [
    'The name Tharparkar originates from a portmanteau of the words Thar (referring to the Thar Desert), and parkar (meaning "to cross over"). The Thar region was historically fertile, although it was mostly desertified between 2000 and 1500 BC. Before its desertification, a tributary of the Indus River was said to flow through the region; it is speculated by some historians that this river could be the ancient Sarasvati River mentioned in the Hindu Rigveda. The Thar region is also mentioned in the Ramayana, where it is called "Lavanasagara" (meaning "salt ocean").',
    'Sindh was ruled by various dynasties after the fall of the Indus Valley civilisation. These dynasties included the Soomras[7]), the Sammas, the Arghuns, the Kalhoras, and the Talpurs. These rulers mainly focused on the central and western parts of Sindh while the eastern areas, including Tharparkar were largely disregarded. In 1843, as a part of the British conquest of large parts of the Indian subcontinent, Charles James Napier, the Commander-in-Chief of the Presidency Armies, defeated the Talpur dynasty and conquered Sindh. The conquered areas, including Tharparkar, were incorporated into the Cutch Agency and Hyderabad Collectorate. The government of British India divided Sindh into Collectorates, or districts, administered by British-appointed Zamindars',
    'Sindh was later made part of the Bombay Presidency of British India. In 1858, the entire area around Tharparkar became part of the Hyderabad Division, and in 1860 the region was renamed as Eastern Sindh Frontier, with its headquarters at Amarkot. In 1882, it was reorganized as the Thar and Parkar district, headed by a British Deputy Commissioner, with a political superintendent at Amarkot.[8] In 1906, the district headquarters was moved from Amarkot to Mirpur Khas. On 31 October 1990 the district was divided into the Tharparkar and Mirpur Khas Districts. On 17 April 1993, Umerkot District was carved out of Tharparkar.[7]',
    'Tharparkar is considered the most peaceful place in the entire country and is well known for its centuries-old interfaith harmony. The culture of Tharparkar is an exemplary example of pluralism in Sindh. Muslim residents do not sacrifice cows, not because of any laws but to avoid causing offense to the Hindu community.[171] Hindu residents avoid weddings and celebrations during Muharram (an Islamic month notable for its solemn mood).[172] Hindus also fast and arrange Iftar dinners for their Muslim neighbors in the month of Ramadan, and both sides exchange sweets on Eid and Diwali.[172] Muslim residents also avoid eating any meat during the Hindu occasion of Navratri. According to Dawn, there appears to be no recorded instance communal violence in the district',
    
    'The name Tharparkar originates from a portmanteau of the words Thar (referring to the Thar Desert), and parkar (meaning "to cross over"). The Thar region was historically fertile, although it was mostly desertified between 2000 and 1500 BC. Before its desertification, a tributary of the Indus River was said to flow through the region; it is speculated by some historians that this river could be the ancient Sarasvati River mentioned in the Hindu Rigveda. The Thar region is also mentioned in the Ramayana, where it is called "Lavanasagara" (meaning "salt ocean").',
    'Sindh was ruled by various dynasties after the fall of the Indus Valley civilisation. These dynasties included the Soomras[7]), the Sammas, the Arghuns, the Kalhoras, and the Talpurs. These rulers mainly focused on the central and western parts of Sindh while the eastern areas, including Tharparkar were largely disregarded. In 1843, as a part of the British conquest of large parts of the Indian subcontinent, Charles James Napier, the Commander-in-Chief of the Presidency Armies, defeated the Talpur dynasty and conquered Sindh. The conquered areas, including Tharparkar, were incorporated into the Cutch Agency and Hyderabad Collectorate. The government of British India divided Sindh into Collectorates, or districts, administered by British-appointed Zamindars',
    'Sindh was later made part of the Bombay Presidency of British India. In 1858, the entire area around Tharparkar became part of the Hyderabad Division, and in 1860 the region was renamed as Eastern Sindh Frontier, with its headquarters at Amarkot. In 1882, it was reorganized as the Thar and Parkar district, headed by a British Deputy Commissioner, with a political superintendent at Amarkot.[8] In 1906, the district headquarters was moved from Amarkot to Mirpur Khas. On 31 October 1990 the district was divided into the Tharparkar and Mirpur Khas Districts. On 17 April 1993, Umerkot District was carved out of Tharparkar.[7]',
    'Tharparkar is considered the most peaceful place in the entire country and is well known for its centuries-old interfaith harmony. The culture of Tharparkar is an exemplary example of pluralism in Sindh. Muslim residents do not sacrifice cows, not because of any laws but to avoid causing offense to the Hindu community.[171] Hindu residents avoid weddings and celebrations during Muharram (an Islamic month notable for its solemn mood).[172] Hindus also fast and arrange Iftar dinners for their Muslim neighbors in the month of Ramadan, and both sides exchange sweets on Eid and Diwali.[172] Muslim residents also avoid eating any meat during the Hindu occasion of Navratri. According to Dawn, there appears to be no recorded instance communal violence in the district',
    
    'The name Tharparkar originates from a portmanteau of the words Thar (referring to the Thar Desert), and parkar (meaning "to cross over"). The Thar region was historically fertile, although it was mostly desertified between 2000 and 1500 BC. Before its desertification, a tributary of the Indus River was said to flow through the region; it is speculated by some historians that this river could be the ancient Sarasvati River mentioned in the Hindu Rigveda. The Thar region is also mentioned in the Ramayana, where it is called "Lavanasagara" (meaning "salt ocean").',
    
]
const item = document.querySelector('#items')
const dataContainer = document.querySelector('#data')

function shuffle(array) {
    console.log("call");
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

const generate = () => {

    if (isNaN(item.value) || item.value < 0 || item.value > 9) {
        const randomIndex = Math.floor(Math.random() * text.length)
        dataContainer.innerHTML = `<p>${text[randomIndex]}</p>`
    } else {
        const locatText=shuffle(text)
        const data = locatText.slice(0, item.value)
        const paras = data.map((d) => {
            return `<p>${d}</p>`
        })
        dataContainer.innerHTML = paras.join("")              // join convert array into string
    }
}