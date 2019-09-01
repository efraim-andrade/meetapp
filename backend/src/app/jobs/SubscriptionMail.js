import Mail from '../../lib/Mail';

class SubscriptionMail {
  get key() {
    return 'SubscriptionMail';
  }

  async handle({ data }) {
    const { meetup, user } = data;

    console.log('A fila executou');

    await Mail.sendMail({
      to: `${meetup.user.name} <${meetup.user.email}>`,
      subject: 'Novo participante',
      template: 'subscriptions',
      context: {
        provider: meetup.user.name,
        user: user.name,
        meetup: meetup.title,
      },
    });
  }
}

export default new SubscriptionMail();
