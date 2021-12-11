<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class NoteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'title' => $this->faker->sentence($nbWords = 6, $variableNbWords = true),  // Random task title
            'text' => $this->faker->text(), // Random task description
        ];
    }
}
