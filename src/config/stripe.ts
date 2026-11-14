import Stripe from "stripe";
import config from ".";

const stripeSecretKey = config.stripe.secret_key || 'sk_test_placeholder';

const stripe = new Stripe(stripeSecretKey as string, {
    apiVersion: '2025-10-29.clover',
    typescript: true,
});

export default stripe;