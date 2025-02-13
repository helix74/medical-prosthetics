import { Hero } from '@/components/ui/layout';
import { CONTAINER_STYLES, TYPOGRAPHY_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import { twMerge } from 'tailwind-merge';

export default function CGVPage() {
  return (
    <main className="bg-white">
      <Hero
        badge={{ icon: "📝", text: "Conditions de vente" }}
        title="Conditions Générales de Vente"
        description="Les conditions qui régissent nos ventes de produits et services."
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
              Champ d'application
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
                Les présentes conditions générales de vente s'appliquent à toutes les ventes de produits et services effectuées par Delta Med Plus. Toute commande implique l'acceptation sans réserve par l'acheteur des présentes conditions.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(2),
              'text-[#187baa] mb-6',
              'bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent'
            )}>
              Commandes
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
                Les commandes doivent être passées par écrit (email, fax ou courrier) et doivent inclure :
              </p>
              <ul className="space-y-2 list-disc list-inside text-neutral-700/90">
                <li>La référence exacte des produits</li>
                <li>La quantité souhaitée</li>
                <li>L'adresse de livraison</li>
                <li>Les coordonnées complètes du client</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(2),
              'text-[#187baa] mb-6',
              'bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent'
            )}>
              Prix et paiement
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
                Les prix sont indiqués en Dinars Tunisiens (TND), hors taxes. Le paiement doit être effectué selon les conditions convenues lors de la commande. Un acompte peut être demandé pour certaines commandes.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(2),
              'text-[#187baa] mb-6',
              'bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent'
            )}>
              Livraison
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
                Les délais de livraison sont donnés à titre indicatif. Delta Med Plus ne pourra être tenu responsable des retards de livraison dus à des circonstances indépendantes de sa volonté. Les frais de livraison sont à la charge du client sauf accord contraire.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(2),
              'text-[#187baa] mb-6',
              'bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent'
            )}>
              Garantie
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
                Nos produits sont garantis contre tout défaut de fabrication selon les conditions du fabricant. La garantie ne couvre pas l'usure normale, les dommages dus à une mauvaise utilisation ou à un manque d'entretien.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(2),
              'text-[#187baa] mb-6',
              'bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent'
            )}>
              Retours et réclamations
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
                Tout retour de produit doit faire l'objet d'un accord préalable de notre part. Les réclamations doivent être formulées par écrit dans les 8 jours suivant la réception des produits.
              </p>
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
                Pour toute question concernant nos conditions générales de vente, vous pouvez nous contacter à l'adresse suivante : direction@deltamedicalplus.tn
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 