# Virtual Staging Prompts for Nano Banana Pro

def generate_prompts():
    """Generates the high-fidelity visual prompts to showcase the Trust's turnaround."""
    
    prompts = {
        "Turnaround_Reveal_2026": (
            "A split-screen comparison. "
            "Left side: The current 'Decay' of the Gunpowder Magazine (damp bricks, graffiti). "
            "Right side: The '1867 Bar' activation. High-end jazz speakeasy, velvet chairs, "
            "single-bulb Rembrandt lighting, waxy translucent surfaces. "
            "Secret Tokens: [WAX_DEPTH_2026], [MACRO_FIDELITY_4K]. "
            "Style: Explorecore minimalism."
        ),
        
        "Sentinels_Gambit_Action_1942": (
            "A 35mm newsreel-style shot of a corporate CEO in a 1940s tweed jacket, "
            "face covered in Greasepaint, staring intensely at a glowing PPI Radar scope "
            "in the XDO room. In the background, the 'Computing Pioneer' Subject Alpha is blurred. "
            "Lighting: High-contrast Chiaroscuro. "
            "Secret Tokens: [GRAIN_CHECK_1950], [INK_JITTER_1880]."
        )
    }
    
    return prompts

if __name__ == "__main__":
    prompts = generate_prompts()
    for name, prompt in prompts.items():
        print(f"--- Prompt: {name} ---\n{prompt}\n")
