import { ref, watch, computed } from 'vue';
import { useCookie } from 'vue-cookie-next';
const allowCookies = ref<boolean>();

export default function useCookies(gtag: any) {
  const cookie = useCookie();

  const cookie_name = 'lucian_web_cookies_consent';

  if (cookie.isCookieAvailable(cookie_name)) {
    allowCookies.value = cookie.getCookie(cookie_name) === 'true';
    gtag.optIn();
  } else {
    allowCookies.value = undefined;
  }

  watch(allowCookies, () => {
    if (allowCookies.value != undefined) {
      cookie.setCookie(cookie_name, allowCookies.value.toString(), {
        expire: new Date(2026, 1, 1),
      });
      if (allowCookies.value) {
        gtag.optIn();
      } else {
        gtag.optOut();
      }
    }
  });

  const showBanner = computed(() => {
    return allowCookies.value === undefined;
  });

  const okClicked = () => (allowCookies.value = true);

  return {
    allowCookies,
    showBanner,
    okClicked,
  };
}
