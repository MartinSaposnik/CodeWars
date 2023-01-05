/* function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
}
 */
const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);