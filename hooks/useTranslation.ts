import resources from '../translations/resources';
import { defaultLocale } from '../translations/config';
import { useRouter } from 'next/router';
import { Locale } from '../translations/types';

export default function useTranslation() {
    const { locale } = useRouter();
    const useLocal = locale as Locale;

    const translate = (key: string) => {
        if (!resources[useLocal][key]) {
            console.warn(`Translation '${key}' for locale '${locale}' not found.`);
        }
        return resources[useLocal][key] || resources[defaultLocale][key] || '';
    };

    return {
        translate,
        locale,
    };
}
