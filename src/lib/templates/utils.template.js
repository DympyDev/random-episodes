export const DOMAIN_CHECK = (/** @type {string} */ disneyCode, /** @type {string} */ netflixCode, /** @type {string} */ hboCode) => `if (window.location.host.includes('disneyplus')) {
    ${disneyCode}
} else if (window.location.host.includes('netflix')) {
    ${netflixCode}
} else if (window.location.host.includes('hbomax')) {
    ${hboCode}
} else {
    alert('This streaming site is not supported, you can always request it!');
}`;

export const SELF_INVOKING_FUNCTION = (/** @type {string} */ selfInvokedCode) => `(function(){
    ${selfInvokedCode}
})();`