type Contact = {
  name: string;
  email: string;
  message: string;
};

export function validateContact(form: Contact) {
  if (!form.name.trim() || form.name.trim().length < 2) return false;
  if (!/\S+@\S+\.\S+/.test(form.email)) return false;
  if (!form.message.trim() || form.message.trim().length < 5) return false;
  return true;
}
