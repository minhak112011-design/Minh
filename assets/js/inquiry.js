const clean = (value) => String(value ?? '').trim();

/** Build a message the visitor can paste into the LOWKEY MINH Facebook chat. */
export function buildInquiryMessage({ service, goal, details, budget } = {}) {
  const selectedService = clean(service) || 'Mình muốn được tư vấn loại website phù hợp';
  const projectGoal = clean(goal) || 'Mình muốn trao đổi thêm về ý tưởng website.';
  const extraDetails = clean(details);
  const budgetRange = clean(budget);

  return [
    'Chào Minh! Mình muốn trao đổi về một website.',
    '',
    `Loại website: ${selectedService}`,
    `Mục đích: ${projectGoal}`,
    ...(extraDetails ? [`Thông tin thêm: ${extraDetails}`] : []),
    ...(budgetRange ? [`Ngân sách dự kiến: ${budgetRange}`] : []),
    '',
    'Bạn xem giúp mình phạm vi phù hợp và tư vấn chi phí nhé!',
    '',
    '— Gửi từ website LOWKEY MINH',
  ].join('\n');
}
