import { LOGO_PLACEMENTS } from '@/data/logoPlacements';
import { MATERIALS } from '@/data/materials';
import { SILHOUETTES } from '@/data/silhouettes';
import type { QuoteBrief } from '@/types/quote';

function labelPlacement(key: string) {
  return LOGO_PLACEMENTS.find((p) => p.key === key)?.label ?? key;
}

function labelSilhouette(key: string) {
  if (key === 'unsure') return 'Not sure yet – help me choose';
  return SILHOUETTES.find((s) => s.key === key)?.label ?? key;
}

function labelMaterial(key: string) {
  if (key === 'recommend') return 'Recommend for me';
  return MATERIALS[key as keyof typeof MATERIALS]?.label ?? key;
}

export function buildQuoteMessage(brief: QuoteBrief): string {
  const lines = [
    'QUICK QUOTE REQUEST',
    `Cap style         : ${labelSilhouette(brief.capStyle)}`,
    `Quantity          : ${brief.quantity ?? 0} pcs`,
    `Logo placement    : ${brief.logoPlacements.map(labelPlacement).join('; ')}`,
    `Material          : ${labelMaterial(brief.material)}`,
  ];

  if (brief.decoration) lines.push(`Decoration        : ${brief.decoration.replace(/-/g, ' ')}`);
  if (brief.artwork === 'ready' && brief.pantones) {
    lines.push(`Artwork           : Ready (${brief.pantones})`);
  } else if (brief.artwork) {
    lines.push(`Artwork           : ${brief.artwork}`);
  }
  if (brief.targetDate) lines.push(`Target date       : ${brief.targetDate}`);
  if (brief.destination?.country) {
    lines.push(
      `Destination       : ${brief.destination.country}${brief.destination.port ? ` / ${brief.destination.port}` : ''}`,
    );
  }
  if (brief.reference) lines.push(`Buyer reference   : ${brief.reference}`);
  if (brief.sourceProduct) lines.push(`Source            : shuheng site / product ${brief.sourceProduct}`);

  return lines.join('\n');
}

export function buildChannelUrl(channel: QuoteBrief['channel'], message: string): string {
  const encoded = encodeURIComponent(message);
  switch (channel) {
    case 'whatsapp':
      return `https://wa.me/8613800138000?text=${encoded}`;
    case 'email':
      return `mailto:sales@shuheng-headwear.com?subject=${encodeURIComponent('Quick Quote Request')}&body=${encoded}`;
    case 'alitalk':
      return `https://message.alibaba.com/msgsend/contact.htm?encContactId=292354388&text=${encoded}`;
    default:
      return `mailto:sales@shuheng-headwear.com?body=${encoded}`;
  }
}
