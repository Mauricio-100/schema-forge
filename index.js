// La classe de base pour toutes nos validations de chaînes
class StringForge {
  #validators = [];

  constructor() {
    // Par défaut, on vérifie que c'est bien une chaîne
    this.#validators.push(value => {
      if (typeof value !== 'string') {
        throw new Error('La valeur doit être une chaîne de caractères.');
      }
      return value;
    });
  }

  /**
   * Ajoute une validation pour la longueur minimale.
   * @param {number} min - La longueur minimale.
   */
  minLength(min) {
    this.#validators.push(value => {
      if (value.length < min) {
        throw new Error(`La longueur doit être d'au moins ${min} caractères.`);
      }
      return value;
    });
    return this; // Permet le chaînage
  }

  /**
   * Ajoute une validation pour vérifier que c'est un email.
   */
  isEmail() {
    this.#validators.push(value => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        throw new Error("Le format de l'email est invalide.");
      }
      return value;
    });
    return this;
  }

  /**
   * Exécute toutes les validations sur la valeur fournie.
   * @param {*} value - La valeur à valider.
   */
  process(value) {
    try {
      let currentValue = value;
      for (const validator of this.#validators) {
        currentValue = validator(currentValue);
      }
      return { isValid: true, data: currentValue, errors: [] };
    } catch (error) {
      return { isValid: false, data: value, errors: [error.message] };
    }
  }
}

// Classe principale (pour l'instant, elle ne crée que des StringForges)
class SchemaForge {
  string() {
    return new StringForge();
  }
  
  // TODO: Ajouter number(), object(), etc. ici
}

const forge = new SchemaForge();
export default forge;
