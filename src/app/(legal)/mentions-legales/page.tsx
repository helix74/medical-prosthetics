import { Hero } from '@/components/ui/layout/Hero';
import { CONTAINER_STYLES, TYPOGRAPHY_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import { twMerge } from 'tailwind-merge';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';

export default function MentionsLegalesPage() {
  return (
    <main className="bg-white">
      <Hero
        badge={{ icon: faFileInvoice, text: "Informations légales" }}
        title="Mentions Légales"
        description="Informations légales concernant Delta Med Plus et l'utilisation de notre site web."
        variant="centered"
        size="sm"
      />

      <div className={twMerge(CONTAINER_STYLES.variants.default, 'py-16 md:py-20')}>
        <div className="max-w-3xl mx-auto">
          <section className="mb-12">
            <h2 className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(2),
              'text-[#187baa] mb-6',
              'bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent'
            )}>
              Éditeur du site
            </h2>
            <div className={twMerge(
              'bg-white/50 backdrop-blur-sm rounded-2xl p-8',
              'border border-[#187baa]/10',
              'shadow-lg shadow-[#187baa]/5'
            )}>
              <p className={twMerge(
                TYPOGRAPHY_STYLES.utils.getBody('lg'),
                'text-neutral-700/90 leading-relaxed'
              )}>
                <strong className="text-[#187baa]">Delta Med Plus</strong><br />
                9, Avenue Habib Borguiba<br />
                Bardo, Tunis<br />
                Tunisie<br />
                Tél : +216 99 221 620<br />
                Email : direction@deltamedicalplus.tn
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(2),
              'text-[#187baa] mb-6',
              'bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent'
            )}>
              Hébergement
            </h2>
            <div className={twMerge(
              'bg-white/50 backdrop-blur-sm rounded-2xl p-8',
              'border border-[#187baa]/10',
              'shadow-lg shadow-[#187baa]/5'
            )}>
              <p className={twMerge(
                TYPOGRAPHY_STYLES.utils.getBody('lg'),
                'text-neutral-700/90 leading-relaxed'
              )}>
                Delta Med Plus
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(2),
              'text-[#187baa] mb-6',
              'bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent'
            )}>
              Propriété intellectuelle
            </h2>
            <div className={twMerge(
              'bg-white/50 backdrop-blur-sm rounded-2xl p-8',
              'border border-[#187baa]/10',
              'shadow-lg shadow-[#187baa]/5'
            )}>
              <p className={twMerge(
                TYPOGRAPHY_STYLES.utils.getBody('lg'),
                'text-neutral-700/90 leading-relaxed'
              )}>
                L'ensemble de ce site relève de la législation tunisienne et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(2),
              'text-[#187baa] mb-6',
              'bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent'
            )}>
              Protection des données
            </h2>
            <div className={twMerge(
              'bg-white/50 backdrop-blur-sm rounded-2xl p-8',
              'border border-[#187baa]/10',
              'shadow-lg shadow-[#187baa]/5'
            )}>
              <p className={twMerge(
                TYPOGRAPHY_STYLES.utils.getBody('lg'),
                'text-neutral-700/90 leading-relaxed'
              )}>
                Conformément à la loi tunisienne sur la protection des données personnelles, vous disposez d'un droit d'accès, de modification, de rectification et de suppression des données qui vous concernent. Pour exercer ce droit, veuillez nous contacter à l'adresse : direction@deltamedicalplus.tn
              </p>
            </div>
          </section>

          <section>
            <h2 className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(2),
              'text-[#187baa] mb-6',
              'bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent'
            )}>
              Cookies
            </h2>
            <div className={twMerge(
              'bg-white/50 backdrop-blur-sm rounded-2xl p-8',
              'border border-[#187baa]/10',
              'shadow-lg shadow-[#187baa]/5'
            )}>
              <p className={twMerge(
                TYPOGRAPHY_STYLES.utils.getBody('lg'),
                'text-neutral-700/90 leading-relaxed'
              )}>
                Notre site utilise des cookies pour améliorer l'expérience utilisateur. En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 