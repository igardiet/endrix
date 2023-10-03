import Stripe from "stripe";

export interface UserDetalis
{
    id: string;
    first_name: string;
    last_name: string;
    full_name?: string;
    avatar_url?: string;
    billing_address?: Stripe.Address;
    payment_method?: Stripe.PaymentMethod[ Stripe.PaymentMethod.Type ]
}

