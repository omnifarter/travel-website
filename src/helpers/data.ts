export const data = [
    {abbr:'1',full:'Paris',location:'https://goo.gl/maps/KGBxaQhYWKLUSjMG8',locationQuery:'Paris',description:"Travelling around Paris central by foot was no easy feat. We walked a total of 25km over 9 hours! Cafes were aplenty, filling every corner of the street. Visiting many monumental landmarks such as the Eiffel Tower, Arc de Triomphe and the Louvre Museum, it was really a beautiful city."},
    {abbr:'2',full:'Reims',location:'https://goo.gl/maps/AByBVGQkYesRMxFm7',locationQuery:'Reims',description:"Today was the first time we had french sandwiches. €4,50 for a smoked salmon sandwich was a steal. The highlight of today was the champagne tour at Daniel Durmont, a family-owned boutique champagne producer. We paid a visit to the 170 year old cellar that housed thousands of bottles of champagne, each needing at least 4 years of aging. We tasted 3 different grades of champagne, each with its own blend of grapes."},
    {abbr:'3',full:'Paris and Tours',location:'https://goo.gl/maps/KGBxaQhYWKLUSjMG8',locationQuery:'Paris',description:"We spent a majority of our time today travelling and couldn’t explore much. We managed to have our first alfresco dining experience. Food was amazing, and the price was much cheaper than in Champ Elysses. It was also my first time trying tartare beef, which is minced beef served raw!"},
    {abbr:'4',full:'Tours and Bordeaux', location:'https://goo.gl/maps/JJbwAUStqdAouhSb8',locationQuery:'Tours',description:"Today was the day we picked up our car, a Nissan Qashqai. We drove along Loire Valley and visited the Château du Clos Lucé. It’s also where the grave of Léonard de Vinci rests. We then headed over to Bordeaux, and ended the day with a nice tapas dinner. Proudly owned by a Portuguese."},
    {abbr:'5',full:'Bordeaux', location: 'https://goo.gl/maps/gdybCmcbZdh2FLoK6',locationQuery:'Bordeaux',description:"Today we start our day early with a wine tour in Saint-Émilion. We had a chance to visit a classified vineyard, Château Saint-Georges, to learn about the intricacies of wine making. We spent the rest of the day wandering the streets of Bordeaux’s city center."},
    {abbr:'6',full:'Arcachon Bay and Cap Ferret', location:'https://goo.gl/maps/3fmvz2pDCNCWbB8J7',locationQuery:'Cap Ferret',description:"Today we arrived early in Arcachon Bay, greeted by a stunning view of vast beaches. Taking a ferry over to Cape Farret, we rented bikes and explored the town. We had lunch at an amazing oyster bar that served the freshest oysters straight from the bay itself."},
    {abbr:'7',full:'Arcachon Bay', location:'https://goo.gl/maps/NcVJjt8nETw58uBR7',locationQuery:'Arcachon Bay',description:"Today we woke up at 5am for the sunrise at Dunes du Pilat, the tallest sand dune in Europe, which stands between the sea and the forest. We headed for surfing lessons at the beach at 10am all the way until 1pm. We headed straight for lunch at a nearby oyster bar before heading back for a chill evening."},
    {abbr:'8',full:'Dordogne Valley', location:'https://g.page/gouffrepadirac?share',locationQuery:'Gouffre de Padirac',description:"Today we woke up early for a long drive towards central France. We first started the morning with a visit to Gouffre de Padirac, one of the largest chasms in Europe. We then headed west to board the beautiful steam train in Martel that brings us through the Dordogne Valley. Our stay tonight was a beautiful farm-stay in rural Carlux."},
    {abbr:'9',full:'Clermont-Ferrand', location:'https://goo.gl/maps/in5qDZp5zPM5Ss1TA',locationQuery:'Clermont-Ferrand',description:"Most of the day today was spent on the roads. We had the longest drive so far, spanning 500km over 5 hours. We made a pit stop in Clermont-Ferrand for some amazing photos before heading to the stunning town of Annecy."},
    {abbr:'10',full:'Annecy', location:'https://goo.gl/maps/sG7z4gfEsVn57X8W7',locationQuery:'Annecy',description:"The highlight for today was paragliding over Lac d’Annecy. The views over the mountains were breathtaking. We also tried swimming in the lake, but we couldn’t stay inside for more than a few minutes because it was so cold!"},
    {abbr:'11',full:'Annecy and Charmonix', location:'https://goo.gl/maps/sG7z4gfEsVn57X8W7',locationQuery:'Annecy',description:"Today we explored the old town of Annecy. With the river flowing through the town, it made for a scenic stroll. We then headed for Chamonix, a beautiful town right by the French Alps. We went for a relaxing spa session, soaking in the breathtaking views of the surrounding mountains."},
    {abbr:'12',full:'Charmonix',location:'https://goo.gl/maps/okJXJojk1KsNKWSt9',locationQuery:'Charmonix',description:"We started off bright and early, heading for a gondola ride up Aigulle Du Midi, one of the mountainous peaks. There were strong feelings of altitude sickness as we ascended and we had to slow down our pace. It was all worth it for the stunning sceneries. We also took the train to Montenvers. Sadly, the ice caves were closed."},
    {abbr:'13',full:'Italy and Nice', location:'https://goo.gl/maps/C7hrBmyamKcX79im7',locationQuery:'Nice France',description:"Today we headed to Nice, driving for over 11 hours through Italy. Taking detours to save on tolls backfired on us as the roads were closed, costing us over 4 hours. We stopped at Cuneo for lunch, stumbling upon a food fair! We had Argentinian barbequed meat and it was delicious. We also had Italian Gelato. It was simply divine, surpassing any gelato back in Singapore."}
    ]

export const importImages = (day:string):any[] => {
    let images:any[] = [];
    let r = require.context(`../assets/images`, true)
    let rFilter = r.keys().filter((value)=>value.toString().includes(`/day${day}/`))
    //@ts-ignore
    rFilter.map((item, index) => { images.push({source:r(item)}); });
    return images;
}
 
export const importThumbnail = (day:string):string[] => {
    let images:any[] = [];
    let r = require.context(`../assets/images`, true)
    let rFilter = r.keys().filter((value)=>value.toString().includes(`thumbnail`))
    rFilter.map((item, index) => { images.push(r(item)); });

    return images;
}