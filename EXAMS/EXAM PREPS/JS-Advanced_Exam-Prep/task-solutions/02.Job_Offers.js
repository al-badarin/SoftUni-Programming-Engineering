class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        candidates.map(x => {
            let [name, education, yearsExperience] = x.split('-');

            let candidate = this.jobCandidates.find(x => x.name === name);
            if (candidate) {
                if (yearsExperience > candidate.yearsExperience) {
                    candidate.yearsExperience = yearsExperience;
                }
            } else {
                this.jobCandidates.push({ name, education, yearsExperience });
            }
        });

        let result = [];
        this.jobCandidates.map(x => {
            result.push(x.name);
        });

        return `You successfully added candidates: ${result.join(', ')}.`;
    }

    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split('-');
        minimalExperience = Number(minimalExperience);

        let person = this.jobCandidates.find(x => x.name === name);
        if (!person) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        // let hiredPerson = '';
        if (person) {
            if (minimalExperience > person.yearsExperience) {
                throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`)
            } else {
                person.yearsExperience = 'hired';
                // hiredPerson = person.name;
            }
        }

        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        let candidate = this.jobCandidates.find(x => x.name === name);
        if (!candidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (candidate) {
            switch (candidate.education) {
                case 'Bachelor':
                    return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;

                case 'Master':
                    return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;

                default: return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
            }
        }        
    }

    candidatesDatabase() {
        let result = [];
        if (this.jobCandidates.length == 0) {
            throw new Error('Candidate Database is empty!')
        }
        result.push("Candidates list:");
        this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name)).map(e => result.push(`${e.name}-${e.yearsExpirience}`));
        return result.join("\n");
    }
}

