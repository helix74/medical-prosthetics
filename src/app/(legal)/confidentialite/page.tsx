import { Hero } from '@/components/ui/layout';
import { CONTAINER_STYLES, TYPOGRAPHY_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import { twMerge } from 'tailwind-merge';

export default function ConfidentialitePage() {
  return (
    <main className="bg-white">
      <Hero
        badge={{ icon: "🔒", text: "Protection des données" }}
        title="Politique de Confidentialité"
        description="Comment nous protégeons vos données personnelles et respectons votre vie privée."
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
              Collecte des données
            </h2>
            <div className={twMerge(
              'bg-white/50 backdrop-blur-sm rounded-2xl p-8',
              'border border-[#187baa]/10',
              'shadow-lg shadow-[#187baa]/5'
            )}>
              <p className={twMerge(
                TYPOGRAPHY_STYLES.utils.getBody('lg'),
                'text-neutral-700/90 leading-relaxed mb-4'
              )}>
                Nous collectons uniquement les données personnelles nécessaires au bon fonctionnement de nos services. Ces données peuvent inclure :
              </p>
              <ul className="space-y-2 list-disc list-inside text-neutral-700/90">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Adresse professionnelle</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(2),
              'text-[#187baa] mb-6',
              'bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent'
            )}>
              Utilisation des données
            </h2>
            <div className={twMerge(
              'bg-white/50 backdrop-blur-sm rounded-2xl p-8',
              'border border-[#187baa]/10',
              'shadow-lg shadow-[#187baa]/5'
            )}>
              <p className={twMerge(
                TYPOGRAPHY_STYLES.utils.getBody('lg'),
                'text-neutral-700/90 leading-relaxed mb-4'
              )}>
                Les données collectées sont utilisées pour :
              </p>
              <ul className="space-y-2 list-disc list-inside text-neutral-700/90">
                <li>Répondre à vos demandes de contact</li>
                <li>Vous envoyer des informations sur nos produits et services</li>
                <li>Améliorer notre service client</li>
                <li>Respecter nos obligations légales</li>
              </ul>
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
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout accès, modification, divulgation ou destruction non autorisés. Vos données sont stockées sur des serveurs sécurisés et ne sont accessibles qu'aux employés qui en ont besoin dans le cadre de leur travail.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(2),
              'text-[#187baa] mb-6',
              'bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent'
            )}>
              Vos droits
            </h2>
            <div className={twMerge(
              'bg-white/50 backdrop-blur-sm rounded-2xl p-8',
              'border border-[#187baa]/10',
              'shadow-lg shadow-[#187baa]/5'
            )}>
              <p className={twMerge(
                TYPOGRAPHY_STYLES.utils.getBody('lg'),
                'text-neutral-700/90 leading-relaxed mb-4'
              )}>
                Conformément à la loi, vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <ul className="space-y-2 list-disc list-inside text-neutral-700/90">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(2),
              'text-[#187baa] mb-6',
              'bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent'
            )}>
              Contact
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
                Pour toute question concernant notre politique de confidentialité ou pour exercer vos droits, vous pouvez nous contacter à l'adresse suivante : direction@deltamedicalplus.tn
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 